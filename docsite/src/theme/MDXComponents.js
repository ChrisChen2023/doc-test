// src/theme/MDXComponents.js
import MDXComponents from '@theme-original/MDXComponents';
import React from 'react';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

// 定义你的快捷宏组件
const StudioName = () => <span>NebulaGraph Studio</span>;
const ProductName = () => <span>NebulaGraph Database</span>;

export default {
  ...MDXComponents,
  // ⭐ 注册成自定义的 HTML 标签
  StudioName,
  ProductName,  
};