---
sidebar_position: 3
---

# 模块化
在开发前首先需要了解后台的一个最重要的功能，模块。后台里面的所有的业务功能都被拆分到最小概念模块中里。模块特可以支持开发者之间互相共享。

## 模块如何工作
模块通常是存放在 modules 目录下的，需要通过以下命令来运行以下命令
```shell
php artisan catch:install:module module_name
```
运行完成之后，会在 `storage/app` 下，生成 `module.json`,里面存放着模块的信息
