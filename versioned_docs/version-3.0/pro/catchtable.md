---
sidebar_position: 3
---

# 🚠 Catchtable 组件
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
  一般列表都是需要分页的，但是某种场景下，需要隐藏分页的话，可以使用下面的代码
  ```javascript
  <catch-table :pagination="false"/>
  ```

## 树形表格
要使用树形表格，在 `catch-table` 中也是非常简单的，只需要
```javascript
  <catch-table row-key="id"/>
```
:::info
注意在 `catchtable` 中，树形表格都是自动隐藏分页的
:::

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

## 默认参数
有这么一个场景，例如后台的字典管理，每个字典都需要管理字典值。而每个字典值列表则需要字典的ID。这个时候
每个请求列表的 api 都是需要默认参数 `字典ID`。这个时候就需要添加默认参数
```javascript
<catch-table :defualt-params="{ dic_id: 1}"/>
```
## 曝露方法
表格对外有几个可以直接调用的方法，调用方法之前需要先设置 table ref，在获取整个`catchadmin`对象 ref 之后，才可以使用
```javascript
<catch-table ref="catchtable" />
// js 代码
// ⚠️如果你对 vue 不熟悉的话，注意 ref="catchadmin" 这里 ref 的名称需要和 const [catchtable] 相同
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
</script>
```
### 搜索
在某些操作之后，需要搜索刷新列表
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 catchtable.value.doSearch()
</script>
```
### 重置
在某些操作之后，需要重置列表，也可以叫做刷新吧
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 catchtable.value.reset()
</script>
```

### 打开弹出层
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 // v 行数据
 // 弹出层标题
 catchtable.value.openDialog(v = null, dialogTitle: string = '')
</script>
```
### 关闭弹出层
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 catchtable.value.closeDialog()
</script>
```

### 删除
某些场景需要访问删除接口时候，就可以使用它
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 catchtable.value.del(api: string, id: any)
</script>
```

### 设置默认搜索参数
这个方法在某些特定场景下会有用到，比如一个表格列表的访问他的子列表，子列表需要父列表的某个条件才能访问到。这个时候就需要给子列表设置一个默认参数。`字典管理`列表就是一个很好的例子
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 catchtable.value.setDefaultParams(params: Object = {})
</script>
```

### 获取表格多选ID
目前 `catchadmin` 已经内置了多选删除。如果需要做其他多选操作的时候，可以使用它获取多选数据
```javascript
<script lang="ts" setup>
 import { ref } from 'vue'
 const catchtable = ref()
 catchtable.value.getMultiSelectIds()
</script>
```
## 表格插槽
为了让表格更加灵活点，`catchtable` 内置了几个插槽，来让用户自定义操作
## 表格栏目
对于表格栏目，可以通过表格类型窥探一二。看下表格栏目是如何定义的
```javascript
export type columnType = 'expand' | 'selection' | 'index' | 'operate'
export type fixed = 'fiexed' | 'right' | 'left'
export interface Column {
  type?: columnType // 类型 expand select index
  label?: string
  prop?: string
  'min-width'?: string | number
  width?: number | string
  slot?: 'string'
  header: 'string' // 表头插槽名称
  align?: string
  fixed?: fixed
  sortable?: boolean | string
  'sort-method'?: Function
  'sort-by'?: Function
  resizable?: boolean
  formatter?: Function // function(row, column, cellValue, index)
  'header-align'?: string
  'class-name'?: string
  selectable?: Function // function(row, index)
  show: boolean
  index?: number | Function // 如果设置了 type=index，可以通过传递 index 属性来自定义索引
  children?: Array<Column> // 多级表头
  filter?:Function,
  ellipsis?:boolean|number, // 当文字太多时，可以使用省略文字
  switch: false, // swith 字段状态切换
  // 操作
  update?: boolean, // 编辑操作
  destroy?: boolean // 删除操作
}
```
### 栏目类型
`type` 字段
- `expand` 展开类型，树形结构的表格，规定哪个栏目展开
- `selection` 多选类型，一般用于表格多选操作。一般都是用于主键字段
- `index` 可以自定义索引
- `operate` 最后一行操作栏目

### 栏目固定
`fiexed` 字段
- fixed 默认固定
- right 固定在右侧
- left 固定在左侧

### 插槽
如果栏目是需要自定义，那么肯定是需要用插槽这个功能。只需要设置 `slot` 字段，例如插槽名称设置为
```javascript
{
  label: '你好',
  slot: 'hello'
}
```
那么此时只需要在`catchtable`组件如下设置
```javascript
<catch-table>
  <template #hello="scope">
    // 在这自定义栏目内容
  </template>
</catch-table>
```

### 格式化字段
有时候并不需要插槽，例如当后台的接口中的性别字段(gender)返回 1， 2。其中 1 代表男 2 代表女，这个时候需要实现格式化方法即可
```javascript
{
  label: '性别'，
  prop: 'gender',
  formatter: (value) => {
    return value === 1 ? '男' : '女'
  }
}
```

### 自定义索引
当栏目的 type 设置成 `index` 时，则需要自定义索引，一般通过 `index` 来设置
```javascript
{
  type: 'index',
  prop: 'gender',
  index: () => {}
}
```

### 多级表头
当然，catchtable 也支持多集表头，只要一个简单的配置即可
```javascript
{
  type: 'index',
  prop: 'gender',
  children: [
    {
       type: 'index',
      prop: 'gender',
    }
  ]
}
```

### 字段太长，省略号
```javascript
{
    prop: 'description',
    label: '岗位描述',
    ellipsis: true // 添加该字段
},
```
![](https://s2.xptou.com/2023/05/24/646d451b3e49d.png)

### 字段状态切换
某些场景下，业务中只需要在表格中做某些字段的状态切换，这个时候就可以使用下面的代码
```javascript
{
    prop: 'status', // 设置字段，这里仅做演示
    label: '状态',
    switch: true // 添加该字段
},
```
`catchadmin`在后端通常使用 `enable` 方法做字段切换的路由, 你可以根据实际改动。代码如下
```php
public function enable($id, Request $request)
{
    return $this->model->toggleBy($id, $request->get('field'));
}
```
![](https://s2.xptou.com/2023/05/24/646d4672500a6.png)

### 排序
某些场景下，业务中只需要在表格中做某个字段排序。通常来说，elementPlus 只是在前端列表单独一页排序，但是使用下面的代码，可以直接进行后端排序，不需要写任何一行代码，都是自动完成的
```javascript
{
  prop: 'sort',
  label: '排序',
  sortable: true
}
```
![](https://s2.xptou.com/2023/05/24/646d476c4962a.png)