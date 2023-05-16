---
sidebar_position: 2
---

# catchtable 组件
`catch table` 组件旨在快速减少后台开发中表格的重复编写，动态表格的实现将会大大提高效率，并且极易扩展。高级版本页面全部切换到了 `catchadmin` 组件上

## 基础用法
一个简单的表格，只需要在组件上添加, 这里就以用户管理页面作为例子, 一步一步实现
![](https://www.hualigs.cn/image/646311f57c899.jpg)
代码如下
```javascript
<catch-table
    :columns="[
      {
        type: 'selection'
      },
      {
        label: '用户昵称',
        prop: 'username'
      },
      {
        label: '创建时间',
        prop: 'created_at'
      },
      {
        type: 'operate',
        label: '操作',
        width: 200
      }
    ]"
    api="users"
  />
  ```
  ## 表格搜索
![](https://www.hualigs.cn/image/6463130b546c9.jpg)
只需要新增 `search-form` 属性即可
```javascript
<catch-table
    :columns="[
      {
        type: 'selection'
      },
      {
        label: '用户昵称',
        prop: 'username'
      },
      {
        label: '创建时间',
        prop: 'created_at'
      },
      {
        type: 'operate',
        label: '操作',
        width: 200
      }
    ]"
    api="users"
    :search-form="[
      {
        type: 'input',
        label: '用户名',
        name: 'username'
      },
      {
        type: 'input',
        label: '邮箱',
        name: 'email'
      }
    ]"
  />
  ```
  ok，这样一个完整的表格页面就创建完成了。

## 新增数据
从上图可以看出，一般情况下表格都是带有增删改查的，那么如何新增数据呢？高级版本中，只需要在  `catchtable` 使用 `slot` 即可
![](https://www.hualigs.cn/image/64631573c61bc.jpg)
```javascript
<template>
    <catch-table
        :columns="[
        {
            type: 'selection'
        },
        {
            label: '用户昵称',
            prop: 'username'
        },
        {
            label: '创建时间',
            prop: 'created_at'
        },
        {
            type: 'operate',
            label: '操作',
            width: 200
        }
        ]"
        api="users"
        :search-form="[
        {
            type: 'input',
            label: '用户名',
            name: 'username'
        },
        {
            type: 'input',
            label: '邮箱',
            name: 'email'
        }
        ]"
    >
        <!-- 通过使用 dialog slot -->
        <template #dialog="row">
            <Create :primary="row?.id" :api="api" />
        </template>
    </catch-table>
  </template>
  <script lang="ts" setup>
       import Create from './create.vue
  </script>
  ```
  这里需要注意两点的是，一般情况下 Create 组件都是由代码自动生成功能生成的
  - `Create` 组件是自带 `primary` props 的，用于更新
  - `Create` 组件是自带 `api` props 的，api 主要用于接口提交

  ## 隐藏分页
  一般列表都是需要分页的，但是如果是树状结构的表格，一般都是要隐藏的，所以需要使用
  ```javascript
  <catch-table :pagination="false"/>
  ```

## 树形表格
要使用树形表格，在 `catch-table` 中也是非常简单的，只需要
```javascript
  <catch-table :pagination="false" row-key="id"/>
```

## 空数据显示的文本
如果表格没有数据，需要友好的提示的话，那么可以使用下面的代码，默认使用`暂无数据`
```javascript
  <catch-table empty-text="暂无数据"/>
```

## 隐藏操作
表格默认一个新增操作，如果不需要的话，可以使用
```javascript
<catch-table :operation="false"/>
```
## 隐藏工具栏
在表格右上角，有三个默认工具栏操作，分别是 `刷新`，`表格栏目`, `搜索`, 如果不需要的话，可以使用
```javascript
<catch-table :show-tools="false"/>
```
