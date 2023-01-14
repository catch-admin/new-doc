---
sidebar_position: 1
---

# 项目安装

## 环境要求
- PHP >= 8.1+ (需以下扩展)
  - BCMath
  - Ctype
  - DOM
  - Fileinfo
  - JSON
  - Mbstring
  - OpenSSL
  - PCRE
  - PDO
  - Tokenizer
  - XML
- NGINX
- Mysql


## 安装 PHP 项目
目前项目托管在`github`上，可以前往 [CatchAdmin](https://github.com/JaguarJack/catch-admin) 下载。
或者可以使用`git`(推荐使用) clone 代码，方便及时更新代码。
```sh
git clone https://github.com/JaguarJack/catch-admin.git
```
当然你也可以使用 [Gitee](https://gitee.com/jaguarjack/catchAdmin), 有可能会同步不及时。


进入到`CatchAdmin`目录，该项目不提供`Web install`方式，请使用命令行方式安装。使用以下几个命令即可安装成功。
保证已经保证了`composer`包管理器。`MAC`以及`LINUX`可使用下面的命令, `windows`直接下载`exe`安装

```shell
curl -sS http://install.phpcomposer.com/installer | php

// 安装 composer 扩展
composer install --ignore-platform-reqs

// 安装前端依赖
yarn install

// 安装后台, 按照提示输入对应信息即可
php artisan catch:install

// 启动后台
php artisan serve

// 启动前端项目
yarn dev
```
:::warning
注意不能直接访问 PHP 项目，导致 Exception，前后端分离，需要通过 API 接口形式访问，所以你需要安装 VUE 项目后台，看到数据的展示
:::

:::tip
如果你是第一次使用 Vue，建议先去看看 [Vue](https://cn.vuejs.org/) 文档，了解一下

vue 后台使用了是 `element Plus` [文档地址](https://element-plus.org)
:::


## 打包前端项目
打包前请先配置正是环境 API 地址。在项目的根目录下的`.env.production`文件配置
```
# just a flag
ENV = 'production'

# base api
VUE_APP_BASE_API = '正式环境的 API 地址'
```
然后进行打包
```
yarn run build
```
:::tip
前端项目配置最好开启 `Gzip`,可以加速前端项目访问速度。
:::
#### 推荐配置
```sh
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip 配置
    gzip  on;
    gzip_min_length 1k;
    gzip_comp_level 4;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;
    gzip_static on;
    gzip_vary on;
    gzip_buffers 8 16k;


    include /etc/nginx/conf.d/*.conf;
}
```