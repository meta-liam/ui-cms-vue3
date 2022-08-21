const bookRouter = {
  route: null,
  name: null,
  title: '数据大屏',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/center-stock/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '信息中心',
      type: 'view',
      name: 'BookCreate',
      route: '/center-stock/index',
      filePath: 'view/center-stock/data-index.vue',
      inNav: true,
      icon: 'iconfont icon-add',
    },
    {
      title: '大盘信息',
      type: 'view',
      name: 'BookCreate',
      route: '/center-stock/cockpit',
      filePath: 'view/center-stock/data-cockpit.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '个股信息',
      type: 'view',
      name: 'BookCreate',
      route: '/center-stock/detail/:id(.*)',
      filePath: 'view/center-stock/data-detail.vue',
      inNav: false,
      icon: 'iconfont icon-add',
    },
  ],
}

export default bookRouter
