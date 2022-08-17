const bookRouter = {
  route: null,
  name: null,
  title: '数据大屏',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/stock-data/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '信息中心',
      type: 'view',
      name: 'BookCreate',
      route: '/stock-data/index',
      filePath: 'view/stock-data/data-index.vue',
      inNav: true,
      icon: 'iconfont icon-add',
    },
    {
      title: '大盘信息',
      type: 'view',
      name: 'BookCreate',
      route: '/stock-data/cockpit',
      filePath: 'view/stock-data/data-cockpit.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '个股信息',
      type: 'view',
      name: 'BookCreate',
      route: '/stock-data/detail',
      filePath: 'view/stock-data/data-detail.vue',
      inNav: false,
      icon: 'iconfont icon-add',
    },
  ],
}

export default bookRouter
