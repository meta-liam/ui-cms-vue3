const bookRouter = {
  route: null,
  name: null,
  title: '股票管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/stock-data/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '关注列表',
      type: 'view',
      name: 'BookCreate',
      route: '/stock-data/index',
      filePath: 'view/stock-data/data-index.vue',
      inNav: true,
      icon: 'iconfont icon-add',
    },
  ],
}

export default bookRouter
