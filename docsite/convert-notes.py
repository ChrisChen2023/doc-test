import os
import re

def convert_mkdocs_to_docusaurus(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    in_admonition = False
    
    # 匹配 !!! note "标题" 或 !!! warning
    pattern_start = re.compile(r'^(\s*)!!!\s+(\w+)(?:\s+"([^"]+)")?')

    for line in lines:
        match = pattern_start.match(line)
        
        if match:
            # 如果上一个提示框还没闭合（罕见异常情况），先闭合它
            if in_admonition:
                new_lines.append((indent + ":::\n"))
                
            indent = match.group(1)   # 捕获可能存在的缩进
            adm_type = match.group(2) # note, warning 等
            title = match.group(3)    # 自定义标题
            
            # 映射 Docusaurus 不支持的类型
            if adm_type == 'danger' or adm_type == 'error':
                adm_type = 'danger'
                
            # 拼接 Docusaurus 语法
            title_part = f" {title}" if title else ""
            new_lines.append(f"{indent}:::{adm_type}{title_part}\n")
            in_admonition = True
            continue

        if in_admonition:
            # 如果遇到空行，保持空行
            if line.strip() == "":
                new_lines.append(line)
                continue
                
            # 检查当前行是否有 4 个空格的缩进
            if line.startswith("    ") or line.startswith("\t"):
                # 去掉前 4 个空格
                new_lines.append(line[4:])
            else:
                # 缩进结束了，说明 MkDocs 的 note 结束了，在此处加上 Docusaurus 闭合符
                new_lines.append(":::\n")
                new_lines.append(line)
                in_admonition = False
        else:
            new_lines.append(line)

    # 如果文件末尾正好结束提示框
    if in_admonition:
        new_lines.append(":::\n")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

def process_directories(dirs):
    for target_dir in dirs:
        if not os.path.exists(target_dir):
            continue
        for root, _, files in os.walk(target_dir):
            for file in files:
                if file.endswith('.md') or file.endswith('.mdx'):
                    file_path = os.path.join(root, file)
                    try:
                        convert_mkdocs_to_docusaurus(file_path)
                    except Exception as e:
                        print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    # 指定需要扫描转换的文件夹
    target_folders = ['./docs', './i18n']
    print("开始转换 MkDocs 提示框格式为 Docusaurus 格式...")
    process_directories(target_folders)
    print("🎉 转换完成！请运行 npm run start 验证效果。")