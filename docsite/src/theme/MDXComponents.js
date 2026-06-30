// src/theme/MDXComponents.js
import MDXComponents from '@theme-original/MDXComponents';
import React from 'react';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

// ======= 1. 静态不变量组件定义 =======
const StudioName = () => <span>NebulaGraph Studio</span>;
const ProductName = () => <span>NebulaGraph Database</span>;
const ProductName_CN = () => <span>悦数图数据库</span>;

// ======= 2. 动态多版本变量数据引入 =======
import varsNext from '@site/docs/_variables.json';
import vars311 from '@site/versioned_docs/version-3.11.0/_variables.json';
import vars310 from '@site/versioned_docs/version-3.10.0/_variables.json';

// ======= 3. 建立版本与 JSON 文件的映射矩阵 =======
const versionMatrix = {
  current: varsNext,
  '3.11.0': vars311,
  '3.10.0': vars310,
};

// ======= 4. 动态多版本宏组件定义 =======
const Var = ({ name }) => {
  const { activeVersion } = useActivePluginAndVersion();
  const currentVersionName = activeVersion?.name || 'current';
  const currentVars = versionMatrix[currentVersionName] || varsNext;

  return <span>{currentVars[name] || `[Undefined Var: ${name}]`}</span>;
};

// ======= 5. 统一注册并导出 =======
export default {
  ...MDXComponents,
  StudioName,
  ProductName,  
  ProductName_CN,
  Var,
};