---
sidebar_position: 2
---
# 项目介绍
`Catchcadmin` V3 版本改动非常大，使用 Laravel9.X 最新版版本，Vue3+ElementPlus 组合，在代码组织上，放弃了两个项目独立，将他们组合到一块，这样更方便模块式开发。但是如果想开发的顺畅一点，首先需要了解以下几个相关的技术
- typescript
- vue3
- tailwindcss（css 组件库）
- Laravel （之前使用 tp6 的话，用起来应该没有压力）
### 目录结构
`Catchadmin` V3 版本服务端和前端放在一个项目中，这样会更方便开发。
```
├─app
├─bootstrap
├─config（配置目录）
├─database（migration和seed存放目录）
├─lang（多语言目录）
├─public（运行目录
├─modules（模块目录）
├─resources
│  ├─admin (前端目录)
│  │  ├─assets
|  |  ├─compoents (组件)
|  |  ├─enum （枚举）
|  |  ├─layout 
|  |  ├─router 
|  |  ├─store （pinia目录）
|  |  ├─styles （样式目录）
|  |  ├─support (助手方法)
|  |  ├─types （类型目录）
|  |  ├─views
|  |  | App.vue
|  |  | app.ts
|  |  | env.d.ts
│  │
│  └─views
├─routes
├─storage
├─tests
│  .env-example（env配置示例）
│  .gitattributes
│  .gitignore
│  .travis.yml
│  composer.json
│  .php-cs-fixer.dist.php
|  package.json
│  phpunit.xml
│  postcss.config.js
│  tailwind.config.js
│  tsconfig.json
│  tsconfig.node.json
│  vite.config.js (Vue项目配置)
└─ artisan（命令行入口文件）
```
这里可以先熟悉目录结构，在后续将介绍系统内具体的一些方法和配置。

和之前 2.x 相比，最大的变化就是将核心目录已经独立出去，使用单独的 `composer` 加载，如果遇到任何问题或者 bug 可以到[catchadmin/core](https://github.com/catch-admin/core)仓库提交 issue！