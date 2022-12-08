---
slug: deploy-docs
title: Github Action 自动部署文档
authors: JaguarJack
tags: [自动部署, 文档]
date: 2022-12-8
---

# Github Action
很久之前就听说 [`Github Action`](https://github.com/features/actions) 自动化部署，可惜一直没有使用过。最近也是因为需要更新 `V3` 的文档，要不停的使用 `build`，还要上传到服务器，反反复复，简直是折磨人。直到今天去到仓库的时候看到 `Action` tab，这才想试试 Github 这个集成服务。

查看了相关 GitHub Actions 的资料，它居然是2018年10月推出的。有点吃惊，我居然是在四年后才用上该服务。

# 使用
首先在项目根目录创建一个 **.github** 文件夹

```shell
cd .github && mkdir workflows

// then

touch main.yml
```

Github Action 使用 `YAML` 格式文件做工作流，所以部署的一系列操作应该就是在这个文件夹里完成。在使用之前先了解下 Github Action 的基本概念

### 基本概念
- `workflow` 持续集成一次运行的过程，就是一个 `workflow` (可以简单地理解为一个 yml 文件就是一个 workflow)

- `job` 一个 `workflow` 由一个或多个 `jobs` 构成，含义是一次持续集成的运行，可以完成多个任务

- `step` 每个 `job` 由多个 `step` 构成，一步步完成

- `action` 每个 `step` 可以依次执行一个或多个命令

整个 yml 文件就是一个一个 job 组成，下面看一下 catchadmin 的文档部署的 workflow
```yaml
name: Build and Deploy
on:
  ## 表示
  push:
    branches:
      - master 
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Install and Build
        run: |
          yarn install
          yarn build
```

- 当` master` 分支发送 `push` 事件，才会执行 `workflow`
- 只有一个`job`，运行在虚拟机环境`ubuntu-latest`。
- 第一步是获取源码，使用的 action 是 `actions/checkout`。
- 第二步是安装依赖和构建文档
是不是很简单?

当然这仅仅是在 ubuntu 虚拟机里构建了文档，但需求是要把每次 push 后构建在 ubuntu 虚拟机里的文档上传到自己的服务器。所以这里还差一个步骤。首先在服务器使用 `ssh-keygen` 命令生成私钥和公钥，输入该命令后直接回车就行了，会生成默认的两个文件
- ~/.ssh/id_rsa 私钥文件，不能泄露
- ~/.ssh/id_rsa.pub 公钥文件

接下来将公钥里的内容写入 `authorized_keys` 文件
```shell
cat id_rsa.pub >> authorized_keys

// 顺便修改权限
chmod -R 700 ~/.ssh
chmod -R 640 authorized_keys
```
找到 `/etc/ssh/sshd_config` 文件, 打开两个配置

```shell
PermitRootLogin yes

PubkeyAuthentication yes
```

然后重新启动 sshd
```shell
 systemctl restart sshd
```

## 配置 Github 相关
首先找到需要配置的项目，这里说明，下面所说的都是部署到服务器
[![zRigZq.png](https://s1.ax1x.com/2022/12/08/zRigZq.png)](https://imgse.com/i/zRigZq)
如图，首先找到项目的 Setting，然后找到 Secrets 的 Actions，配置相关服务器变量。本文档主要配置以下几个变量.

- `SERVER_HOST` 服务器 IP 地址
- `SERVER_USERNAME` 服务器用户名
- `SERVER_WORKDIR` 文件上传的位置
- `SERVER_SECRET` ssh 私钥，还记得之前的 `/.ssh/id_rsa` 私钥文件吗?把它的内容复制出来，作为 `SERVER_SECRET` 的 `Value`

OK! 这样部署的相关配置就已经配置好了，main.yml 还缺一个部署步骤，看一下完成的配置
```yaml
name: Build and Deploy
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Install and Build
        run: |
          yarn install
          yarn build

      ## deploy 步骤  
      - name: Deploy
        uses: easingthemes/ssh-deploy@v2.0.7
        env:
          name: use rsa deploy
          REMOTE_HOST: ${{ secrets.SERVER_HOST }}
          REMOTE_USER: ${{ secrets.SERVER_USERNAME }}
          ## 秘钥
          SSH_PRIVATE_KEY: ${{ secrets.SERVER_SECRET }}
          ## 这个参数是必须的
          ARGS: -avz --delete 
          SOURCE: "build/"
          SERVER_PORT: "22"
          TARGET: ${{ secrets.SERVER_WORKDIR }}
          EXCLUDE: "/build/, /node_modules/"

```
这样就创建完成了。可以试试 PUSH 到仓库，查看流水线的每个步骤，如下图所示，就可以了。因为服务器在美国，使用的是 `Rsync` 同步文件，可能时间比较长点。
使用这个服务的时候，腾讯云提醒我高危。
[![zRFlT0.png](https://s1.ax1x.com/2022/12/08/zRFlT0.png)](https://imgse.com/i/zRFlT0)