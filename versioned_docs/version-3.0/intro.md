---
sidebar_position: 1
---

# 介绍

`CatchAdmin`是一款基于[Laravel](https://laravel.com)和[Element Plus](https://element-plus.org)二次开发而成后台管理系统。`Laravel` 社区也有许多非常优秀的后台管理系统，例如 `Nova`, 官方出品，当然是收费的，免费的有基于 `Livewire` 的 `Filament`，还有不得不说的 `Laravel Admin`。`CatchAdmin` 还是采用传统的前后端分离策略，`Laravel` 框架仅仅作为 `Api` 输出。将管理系统模块之间的耦合降到了最低限度。每个模块之间都有独立的 controller，路由，模型，数据表。在开发上尽可能将模块之间的影响降到最低，降低了开发上的难度。基于 CatchAdmin 可以开发 cms，CRM，OA 等 等系统。也封装了很多实用的工具，提升开发体验。

## 为什么是 Laravel
`V2` 版本使用`Thinkphp`，但从其社区来看，从我个人角度来看开发组的心思已经不在维护框架上，因为据观察，每一次小版本发布都会引发一些小问题，虽然不大，但给人一种不够稳定的感觉，所以思索再三，使用 `Laravel`。`Laravel` 社区非常繁荣，他们每周都会发布新版本，以及围绕`Laravel`构建的生态也非常完善，有 `Horizon` 队列管理工具, `Telescope` 调试工具，`Octane`（基于 Swoole 和 RoadRunner 提高性能）等等一系列的工具，而且都是免费的。

## 功能
[x] `用户管理` 后台用户管理
[x] `部门管理` 配置公司的部门结构，支持树形结构
[x] `岗位管理` 配置后台用户的职务
[x] `菜单管理` 配置系统菜单，按钮等等
[x] `角色管理` 配置用户担当的角色，分配权限
[x] `操作日志` 后台用户操作记录
[x] `登录日志` 后台系统用户的登录记录
[x] `代码生成` 生成 API 端的 CURD 操作
[x] `Schema 管理` 生成表结构 
[x] `模块管理` 系统模块管理

## 项目地址
- [github 地址](https://github.com/jaguarjack/catch-admin)
- [gitee 地址](https://gitee.com/jaguarjack/catchAdmin)
- [前端 Vue 项目地址](https://github.com/jaguarjack/catch-admin-vue)

## 安装
保证机器上已有 `git`, `composer`以及`yarn`

首先下载项目
```shell
git clone https://github.com/JaguarJack/catch-admin  catchadmin
```

进入 catchadmin 目录
```shell
cd catchadmin

// 安装 PHP 依赖
composer install

// 安装前端项目依赖
yarn install
```

### 初始化后台
安装项目成功之后，使用内置的 `artisan` 命令
```shell
php artisan catch:install
```
根据提示，输入相关信息，即可，初始化项目配置。

:::warning
如果在输入项目配置后，出现等待一段时间没有输出并且没有报错的话，可以**回车**下
:::
