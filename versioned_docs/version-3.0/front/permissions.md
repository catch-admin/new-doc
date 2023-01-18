---
sidebar_position: 4
---

# 权限认证
上面其实也讲到了权限相关的，用户在通过认证之后，后端在用户信息中其实已经加入了该用户所有权限。可以通过 `resource/admin/store/user/index.ts` 的 `UserStore`获取
```typescript
const userHasPermissions = userStore.getPermissions
```
用户的所有权限有了之后，就可以通过自定义指令[vue 指令](https://cn.vuejs.org/guide/reusability/custom-directives.html) 定义权限指令
:::warning
目前后台还未实现该指令，用户可以自己实现
:::

众所周知，后端是模块的，为了防止模块之间的路由会发生冲突，所以权限标识是由**模块** + **controller@action** 组合
:::info
后端路由即 controller@action，权限标识也是这样定义
:::
所以权限检测可以这么写, 伪代码如下
```typescript
function hasPermission(string mark) {
    // mark 是这样的形式 module + '@' + 'controller@action'
    // 当然也可以定义其他形式的
    const userHasPermissions = userStore.getPermissions
    userHasPermissions.each(item => {
        if (permissions === (item.module + '@' + item.permission_mark)) {
            return true
        }
    })
    return false
}
```
这样就是检测权限了，那么再将其引入到自定义指令中，这里代码仅提供思路，正确性未知
```typescript
app.directive('permission', (el, binding) => {
  const hasPermission = hasPermission(binding.value)
  if (!hasPermission) {
    el.style.display =  none
  }
})
```
在项目中这么使用
```html
<template>
  <el-button v-permission="user@user@store">创建权限</el-button>
</template>
```