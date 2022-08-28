const bookRouter = {
  route: null,
  name: null,
  title: '调度管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/data-cron/', // 文件路径
  order: 30,
  inNav: true,
  permission: ['data-crons'],
  children: [
    {
      title: '任务列表',
      type: 'view',
      name: 'CronList',
      route: '/data-center/cron/list',
      filePath: 'view/data-cron/cron-list.vue',
      inNav: true,
      permission: ['data-cron-list'],
      icon: 'iconfont icon-add',
    },
    {
      title: '调度日志',
      type: 'view',
      name: 'CronLog',
      route: '/data-center/cron/log',
      filePath: 'view/data-cron/cron-log.vue',
      inNav: true,
      permission: ['data-cron-log'],
      icon: 'iconfont icon-rizhiguanli',
    },
    {
      title: '爬虫日志',
      type: 'view',
      name: 'SpidersLog',
      route: '/data-center/spiders/log',
      filePath: 'view/data-cron/spiders-log.vue',
      inNav: true,
      permission: ['data-spiders-logs'],
      icon: 'iconfont icon-rizhiguanli',
    },
  ],
}

export default bookRouter
