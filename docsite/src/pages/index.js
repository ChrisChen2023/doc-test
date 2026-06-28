import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  // ⭐ 这里的路径要改成你想让用户一进网站就看到的“第一篇文档的真实相对路径”
  // 因为你配置了版本号作为 path，所以要带上版本号
  const redirectUrl = useBaseUrl('/3.11.0/');
  
  // 核心：无缝重定向，跳过白屏，直接直达文档正文
  return <Redirect to={redirectUrl} />;
}