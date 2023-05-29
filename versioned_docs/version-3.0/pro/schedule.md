---
sidebar_position: 4
---

# 💎 任务调度
虽然 Laravel 的定时任务已经非常人性化了，但是还是需要进行代码配置。所以在专业版本里面，CatchAdmin 对定时任务的可视化管理，可以大大简便这个流程，而且可视化的定时任务可以随时进行控制。如下图功能
![](https://s2.xptou.com/2023/05/29/647463b82b392.png)

## 使用
`Laravel` 框架自带的任务调度，通常需要使用`command`，正常情况下需要通过下面的命令创建一个调度任务
```shell
php artisan make:command test
```
将会生成如下代码
```php title="app\Console\Commands\test.php"
<?php

namespace App\Console\Commands;

use Catch\Exceptions\FailedException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class test extends Command
{
    // 这里就是 [任务调度命令]
    protected $signature = 'app:test';

    
    protected $description = 'Command description';


    // 任务执行逻辑
    public function handle()
    {
        //
        sleep(10);
    }
}
```
那么一个基本的调度任务就创建成功了。添加成功之后，你需要如何调度任务呢？在 `Laravel` 中，首先你要在服务器缇添加一条 `crontab` 规则。
```shell
* * * * * cd /www/project(项目的根目录) && php artisan schedule:run >> /dev/null 2>&1
```
这条规则的意思是每分钟执行一次。首先 cd 进入到项目的根目录，然后调用 `php artisan schedule:run` 执行任务。这只需要添加一次即可。

**最后一步**还需要添加任务的调度规则，这个只需要从代码添加即可
```php title="app\Console\Kernel.php"
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Modules\System\Support\Schedule as ScheduleTasks;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // 这里添加任务如何调度
        $schedule->command('app:test')->everyMinute();
    }
}
```

### 可视化
专业版主要解决这遇到的几个问题
- 添加任务无法可视化
- 任务执行状态不可知
- 任务执行时间不可知
- 任务执行结束操作不可用

在专业版本中，你需要将上面的最后一步取消，🙅不要去<span className="text-lg text-red-500">手动添加</span>任务，而是从👉<span className="text-lg text-indigo-500">后台可视化</span>面板添加。如下图
![](https://s2.xptou.com/2023/05/29/647473da4052d.png)
在添加完成之后，任务将会按照制定规则执行

## 事件
想一下有这样的场景，如果任务执行成功后，需要发送邮件给某人，或者任务失败了，需要及时推送钉钉消息。`CatchAdmin` 中内置两个事件
### 任务成功事件
```php title="modules\System\Events\CronTaskSuccess.php"
<?php
namespace Modules\System\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CronTaskSuccess
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * 创建一个新的事件实例。
     */
    public function __construct(public int $taskId)
    {}
}
```
### 任务失败事件
```php title="modules\System\Events\CronTaskFailed.php"
<?php
namespace Modules\System\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CronTaskFailed
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * 创建一个新的事件实例。
     */
    public function __construct(public int $taskId)
    {}
}
```
听过这两个事件，你可以轻松实现上述场景，只需要实现对应的 `Listener` 即可。如果对 Laravel 的事件系统不了解，可以查看[Laravel事件系统](https://learnku.com/docs/laravel/10.x/eventsmd/14864)