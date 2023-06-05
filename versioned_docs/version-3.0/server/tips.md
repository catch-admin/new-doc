---
sidebar_position: 100
---

# 小技巧
这里将会更新一些`Catchadmin`后台管理系统中的一些小技巧，以便能更好适应这个框架的开发。也👏欢迎开发者补充

## 取消路由中间件
`CatchAdmin` 后台路由默认加了设置的中间件，目前的是有四个。
```php
Catch\Middleware\AuthMiddleware // 认证中间件
Catch\Middleware\JsonResponseMiddleware // Json 响应中间件
Modules\User\Middlewares\OperatingMiddleware // 操作日志记录的中间件
Modules\Permissions\Middlewares\PermissionGate // 权限认证的中间件
```
由于在模块服务中添加的路由通常都是**全局**注册到后台所有路由中，但是有时候你并不需要这些路由, 比如做微信公众号验证的时候，并不需要这些路由。你可以使用下面的技巧`withoutMiddleware(config('catch.route.middlewares'))` 取消模块中所有的公共中间件
```php
Route::withoutMiddleware(config('catch.route.middlewares'))
    ->prefix('wechat')
    ->group(function(){
    Route::prefix('official')->group(function (){
       Route::get('sign', [OfficialAccountController::class, 'sign']);
    });
    //next
});
```

## 响应自定义
目前 `CatchAdmin` 中的响应结构都是固定的, 格式如下
```php
return [
    'message' => '',
    'data' => '',
    'code' => ''
]
```
某些情况下你需要特定的结构的话，并不需要上面固定的结构，那么你可以使用下面的技巧.
```php
Route::withoutMiddleware('Catch\Middleware\JsonResponseMiddleware')
    ->group(function(){
    Route::prefix('test')->group(function (){
       Route::get('test', [TestController::class, 'index']);
    });
});
```
这是由于 `CatchAdmin`通过中间件将所有响应都转换成了`JsonResponse`,然后通过劫持 `JsonResponse` 对象，返回固定的响应格式。
所以只要取消 `JsonResponseMiddleware`, 然后再自己自定义针对特定接口做相应的数据结构即可