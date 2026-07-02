import os
import subprocess
import re
import json
from openai import OpenAI

# 初始化 AI 客户端（自动读取环境变量中的 API KEY 和 BASE URL）
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
    base_url=os.environ.get("OPENAI_API_BASE", "https://api.openai.com/v1")
)

# 常量定义（基于您的项目目录微调）
MODEL_NAME = "gpt-4o"  # 推荐使用上下文理解能力极强的模型
CN_PREFIX = "docsite/i18n/zh/docusaurus-plugin-content-docs/current/"
EN_PREFIX = "docsite/docs/"
CODE_JSON_PATH = "docsite/i18n/zh/code.json"

def get_git_changes():
    """通过 Git Diff 捕获上一次 commit 的变更文件列表"""
    try:
        cmd = ["git", "diff", "--name-only", "HEAD~1", "HEAD"]
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        return [line.strip() for line in result.stdout.split("\n") if line.strip()]
    except subprocess.CalledProcessError as e:
        print(f"提取 Git 变更失败: {e.stderr}")
        return []

def determine_translation_mode(changed_files):
    """
    智能方向判定：
    - 如果变动在 docsite/docs/ -> 英翻中
    - 如果变动在 docsite/i18n/zh/.../current/ -> 中翻英
    """
    has_en_changes = any(f.startswith(EN_PREFIX) and f.endswith(('.md', '.mdx')) for f in changed_files)
    has_cn_changes = any(f.startswith(CN_PREFIX) and f.endswith(('.md', '.mdx')) for f in changed_files)
    
    if has_en_changes and has_cn_changes:
        raise ValueError("❌ 踩坑警告：同时检测到中英文档变动，禁止混合提交，请拆分 PR！")
    
    if has_en_changes:
        return "EN_TO_CN"
    if has_cn_changes:
        return "CN_TO_EN"
    return "NO_DOCS_CHANGES"

def split_front_matter(content):
    """
    利用正则剥离 Markdown 顶部的 Front Matter (--- 包裹的内容)
    保护 Docusaurus 的 id, sidebar_position 等不被 AI 破坏
    """
    pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)$'
    match = re.match(pattern, content, re.DOTALL)
    if match:
        return match.group(1), match.group(2)
    return "", content

def call_ai_translate(text, source_lang, target_lang):
    """调用大模型进行专业的文档块级/全文翻译"""
    if not text.strip():
        return ""
        
    system_prompt = f"""You are a professional technical writer and translator fluent in both English and Chinese, specializing in graph databases and database infrastructure.
Task: Translate the following technical documentation from {source_lang} to {target_lang}.

Strict Rules:
1. Preserve all Markdown / MDX syntax formatting elements completely (e.g., code blocks `...`, lists, bold text, links).
2. DO NOT alter or translate Docusaurus custom macro tags / components like `<ProductName />`, `<StudioName />`, `<Var name="..." />`. Keep them EXACTLY as they are.
3. Maintain technical accuracy. Translate concepts naturally without losing context.
4. Output ONLY the translated text. Do not include chat greetings or explanations."""

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": text}
        ],
        temperature=0.1
    )
    return response.choices[0].message.content

def sync_sidebars_js_macros():
    """
    智能逆向/正向侧边栏词条扫描器。
    直接读取 sidebars.js，利用大模型将里面的 label 属性进行中英双向补齐并写入 code.json
    """
    sidebars_path = "docsite/sidebars.js"
    if not os.path.exists(sidebars_path):
        return
        
    print("🔍 正在扫描侧边栏 sidebars.js 配置...")
    with open(sidebars_path, 'r', encoding='utf-8') as f:
        sb_content = f.read()
        
    labels = re.findall(r'label:\s*[\'"](.*?)[\'"]', sb_content)
    if not labels:
        return
        
    current_cache = {}
    if os.path.exists(CODE_JSON_PATH):
        with open(CODE_JSON_PATH, 'r', encoding='utf-8') as f:
            try:
                current_cache = json.load(f)
            except json.JSONDecodeError:
                current_cache = {}
            
    updated = False
    for label in labels:
        dict_key = f"sidebar.docsSidebar.item.{label}"
        
        # 判定 A：如果 label 是中文（先写中文场景），逆向生成英文 Key
        if re.search(r'[\u4e00-\u9fa5]', label):
            # 预测对应的英文翻译 Key 是否存在
            # 注意：这里做简化处理，若未缓存则让 AI 算一次
            is_exist = any(item.get("message") == label for item in current_cache.values())
            if not is_exist:
                print(f"   发现新增中文侧边栏菜单: [{label}]，正在反向翻译为英文 Key...")
                en_translation = call_ai_translate(label, "Chinese", "English")
                current_cache[f"sidebar.docsSidebar.item.{en_translation}"] = {
                    "message": label
                }
                updated = True
                
        # 判定 B：如果 label 是纯英文（先写英文场景），直接正向存入
        else:
            if dict_key not in current_cache:
                print(f"   发现新增英文侧边栏菜单: [{label}]，正在正向翻译为中文 Value...")
                cn_translation = call_ai_translate(label, "English", "Chinese")
                current_cache[dict_key] = {
                    "message": cn_translation
                }
                updated = True
                
    if updated:
        os.makedirs(os.path.dirname(CODE_JSON_PATH), exist_ok=True)
        with open(CODE_JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(current_cache, f, ensure_ascii=False, indent=2)
        print("✨ 侧边栏结构化词条双向智能对齐成功！")

def translate_file(source_path, target_path, mode):
    print(f"📂 正在构建翻译补丁: {source_path} -> {target_path}")
    with open(source_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    front_matter, body = split_front_matter(content)
    source_lang, target_lang = ("English", "Chinese") if mode == "EN_TO_CN" else ("Chinese", "English")
    
    translated_fm_lines = []
    if front_matter:
        for line in front_matter.split('\n'):
            if line.startswith(('title:', 'description:')):
                key, val = line.split(':', 1)
                translated_val = call_ai_translate(val.strip(), source_lang, target_lang)
                translated_fm_lines.append(f"{key}: {translated_val}")
            else:
                translated_fm_lines.append(line)
                
    translated_body = call_ai_translate(body, source_lang, target_lang)
    
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    with open(target_path, 'w', encoding='utf-8') as f:
        if front_matter:
            f.write("---\n" + "\n".join(translated_fm_lines) + "\n---\n")
        f.write(translated_body)

def main():
    # 1. 率先无条件执行侧边栏的双向词条对齐
    sync_sidebars_js_macros()
    
    # 2. 获取文档文件的 Git 增量
    changed_files = get_git_changes()
    print(f"本次 Commit 变动的文件列表: {changed_files}")
    
    try:
        mode = determine_translation_mode(changed_files)
    except ValueError as e:
        print(str(e))
        return

    if mode == "NO_DOCS_CHANGES":
        print("☕ 未检测到任何 Markdown 文档镜像发生变动，结束脚本。")
        return
        
    print(f"🎯 识别到增量翻译工作模式为: {mode}")
    
    for file in changed_files:
        if not file.endswith(('.md', '.mdx')):
            continue
            
        if mode == "EN_TO_CN" and file.startswith(EN_PREFIX):
            relative_path = file[len(EN_PREFIX):]
            target_path = os.path.join(CN_PREFIX, relative_path)
            translate_file(file, target_path, mode)
            
        elif mode == "CN_TO_EN" and file.startswith(CN_PREFIX):
            relative_path = file[len(CN_PREFIX):]
            target_path = os.path.join(EN_PREFIX, relative_path)
            translate_file(file, target_path, mode)

if __name__ == "__main__":
    main()