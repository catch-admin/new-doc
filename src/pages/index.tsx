import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';

function Header() {
  const {siteConfig} = useDocusaurusContext();
  const isDarkTheme = useColorMode().colorMode === 'dark'
  return (
    <div className="bg-white w-full relative">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-white  dark:bg-[#15172a] px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
          <div className="inline-block w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-4xl mt-6">
          {siteConfig.title}
          </div>
          <span className="inline-block w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text text-right pr-4">{siteConfig.tagline}</span>
            <p className="mt-6 leading-8">
              <span className='text-2xl text-indigo-500'>Catchadmin</span> <span className='text-base'>是基于 <a href="https://laravel.com" target="_blank">Laravel</a> 和 <a href="https://laravel.com" target="_blank">Vue</a> 构建的强大后台管理系统！简洁、可扩展，让您轻松管理用户、权限和数据。立即体验，展现卓越</span>         
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-end">
              <Link
              className="rounded-md bg-white shadow-gray-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              to="/docs/3.0/intro">
                  开始使用  →
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] shadow-2xl dark:shadow-none max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={!isDarkTheme ? "/img/background.png" : "/img/index_background.png"}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <div className='hidden sm:flex absolute z-[100] top-[31rem] mx-auto w-full justify-center'>
        <Link className="flex w-32 h-12 pt-2 justify-center rounded-md cursor-pointer bg-gray-100 dark:bg-white text-sm font-semibold text-gray-900 hover:shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        to="https://github.com/JaguarJack/catch-admin"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill={!isDarkTheme ? "#000000" : "#000000"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path></g></svg>        
          <div className='pt-[0.25rem] ml-1 text-base pr-2'> Github </div> 
        </Link>
        <Link className="flex w-32 h-12 pt-2 ml-5 justify-center rounded-md cursor-pointer bg-gray-100 dark:bg-white text-sm font-semibold text-gray-900 hover:shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        to="https://gitee.com/catchadmin/catchAdmin"
        >
          <svg fill="#eb0505" className="w-8 h-8" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"></path></g></svg>
          <div className='pt-[0.25rem] ml-1 text-base pr-2'>Gitee</div>
        </Link>

        <Link className="flex w-32 h-12 pt-2 ml-5 justify-center rounded-md cursor-pointer bg-gray-100 dark:bg-white  text-sm font-semibold text-gray-900 hover:shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        to="https://v3.catchadmin.com/"
        >
          <div className='pt-[0.25rem] ml-1 text-base pr-2'>👉 演示站点</div>
        </Link>
      </div>
    </div>
  )
}


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
      <Header />
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
