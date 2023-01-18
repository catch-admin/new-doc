---
sidebar_position: 1
---

# 配置
首先先了解`catchadmin` 的相关配置
```php title="config/catch.php"
return [
    /*
    |--------------------------------------------------------------------------
    | catch-admin super admin id
    |--------------------------------------------------------------------------
    |
    | where you can set super admin id
    |
    */
    'super_admin' => 1,

    /*
    |--------------------------------------------------------------------------
    | catch-admin module setting
    |--------------------------------------------------------------------------
    |
    | the root where module generate
    | the namespace is module root namespace
    | the default dirs is module generate default dirs
    */
    'module' => [
        'root' => 'modules',

        'namespace' => 'Modules',

        'default' => ['develop', 'user', 'permission'],

        'default_dirs' => [
            'Http'.DIRECTORY_SEPARATOR,

            'Http'.DIRECTORY_SEPARATOR.'Requests'.DIRECTORY_SEPARATOR,

            'Http'.DIRECTORY_SEPARATOR.'Controllers'.DIRECTORY_SEPARATOR,

            'Models'.DIRECTORY_SEPARATOR,

            'views'.DIRECTORY_SEPARATOR,
        ],

        // storage module information
        // which driver should be used?
        'driver' => [
            // currently, catchadmin support file and database
            // the default is driver
            'default' => 'file',

            // use database driver
            'table_name' => 'admin_modules'
        ],

        /**
         * module routes collection
         *
         */
        'routes' => [],
    ],

    /*
    |--------------------------------------------------------------------------
    | catch-admin response
    |--------------------------------------------------------------------------
    */
    'response' => [
        // it's a controller middleware, it's set in CatchController
        // if you not need json response, don't extend CatchController
        'always_json' => \Catch\Middleware\JsonResponseMiddleware::class,

        // response listener
        // it  listens [RequestHandled] event, if you don't need this
        // you can change this config
        'request_handled_listener' => \Catch\Listeners\RequestHandledListener::class
    ],

    /*
    |--------------------------------------------------------------------------
    | catch-admin auth setting
    |--------------------------------------------------------------------------
    */
    'auth' => [
        'guards' => [
            'admin' => [
                'driver' => 'jwt',
                'provider' => 'admin_users',
            ],
        ],

        'providers' => [
            'admin_users' => [
                'driver' => 'eloquent',
                'model' => \Modules\User\Models\User::class
            ]
        ]
    ],

    /*
   |--------------------------------------------------------------------------
   | database sql log
   |--------------------------------------------------------------------------
   */
    'listen_db_log' => true,

    /*
   |--------------------------------------------------------------------------
   | route config
   |--------------------------------------------------------------------------
   */
    'route' => [
        'prefix' => 'api',

        'middlewares' => [
            \Catch\Middleware\AuthMiddleware::class,
            \Catch\Middleware\JsonResponseMiddleware::class
        ]
    ],
];
```

- `super_admin` 配置 **super admin** 的 **ID**，默认 1

- `module` 模块相关配置
    - `root` 配置模块的根目录
    - `namespace` 模块根命名空间
    - `default` 默认模块，初始化 `develop`, `use`, `common` 三个模块
    - `default_dirs` 默认生成默认的目录
    - `driver` 模块配置驱动 默认是 file
    - `routes` 模块路由集合

- `response` 响应配置
    - `always_json` 响应输出 `Json`
    - `request_handled_listener `响应数据格式配置
- `auth` 认证相关配置

- `listen_db_log` 是否监听 **DB SQL**

- `route` 路由配置
    - `prefix` 路由前缀
    - `middlewares` 路由默认路由

项目有定制需求，一定要看看这些配置。


