import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--info button--lg"
            to="/docs/intro">
              Get Started  →
          </Link>
        </div>
        <div className={styles.opensource}>
            <Link className="button button--secondary margin-right--lg" to="https://github.com/jaguarjack/catch-admin">Github</Link>

            <Link className="button  button--danger margin-left--lg" to="https://gitee.com/jaguarjack/catchAdmin">Gitee</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="CatchAdmin是一款基于thinkphp framework和element admin二次开发而成后台管理系统。因为 thinkphp 的简单高效，文档齐全。在看了很多 thinkphp 生态中的后台管理系统，发现没有一款合适的前后端分离系统。遂开发了 CatchAdmin。 完全利用了 thinkphp6 的新版本特性 ServiceProvider，将管理系统模块之间的耦合降到了最低限度。每个模块之间都有独立的 controller，路由，模型，数据表`。在开发上尽可能将模块之间的影响降到最低，降低了开发上的难度。基于 CatchAdmin 可以开发 cms，CRM，OA 等 等系统。也封装了很多实用的工具，提升开发体验">
      <HomepageHeader />
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
