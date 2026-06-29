// src/pages/index.js
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

// 模块 1：Hero Banner
function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <span className="badge badge--success margin-bottom--md" style={{fontSize: '0.9rem', padding: '0.4rem 0.8rem'}}>
          Latest v3.12.0 Powered
        </span>
        <h1 className="hero__title" style={{fontWeight: 800, fontSize: '3.5rem'}}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{opacity: 0.8}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/3.11.0/introduction/what-is-nebula-graph">
            <Translate id="homepage.cta.start">Get Started 🚀</Translate>
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="https://github.com/vesoft-inc/nebula">
            GitHub Star ⭐
          </Link>
        </div>
      </div>
    </header>
  );
}

// 模块 2：Feature Cards (核心优势)
const FeatureList = [
  { title: 'Distributed Architecture', icon: '🌐', desc: 'Shared-nothing distributed architecture ensures linear scalability.' },
  { title: 'High Performance', icon: '⚡', desc: 'Millisecond query latencies on millons of vertices and edges.' },
  { title: 'Open Cypher Compatible', icon: '🛠️', desc: 'Easy to query and transition from Neo4j using nGQL syntax.' },
];

function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className={styles.featureCard}>
                <span className={styles.featureIcon}>{props.icon}</span>
                <h3 style={{fontWeight: 700}}>{props.title}</h3>
                <p className="text--muted">{props.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 模块 3：Quick Start Console (快速体验区)
function QuickStartSection() {
  return (
    <section className={clsx(styles.section, styles.sectionGray)}>
      <div className="container text--center">
        <h2 style={{fontWeight: 700, marginBottom: '2rem'}}>
          <Translate id="homepage.quickstart.title">Try it in 1 Minute</Translate>
        </h2>
        <div className={styles.codeBlockWrapper}>
          <CodeBlock language="bash">
            {`# Start NebulaGraph via Docker Compose
git clone https://github.com/vesoft-inc/nebula-docker-compose.git
cd nebula-docker-compose && docker-compose up -d`}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

// 主页面组装
export default function Home() {
  return (
    <Layout title="Home" description="Fancy Homepage for NebulaGraph Database Manual">
      <HeroSection />
      <main>
        <FeaturesSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
