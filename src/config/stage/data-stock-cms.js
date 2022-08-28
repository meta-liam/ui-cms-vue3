const bookRouter = {
  route: null,
  name: null,
  title: '股票管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/stock-cms/', // 文件路径
  order: 80,
  inNav: true,
  permission: ['stock-cms'],
  children: [
    {
      title: '关注的股票',
      type: 'view',
      name: 'Symbols',
      route: '/stock/symbol/list',
      filePath: 'view/stock-cms/symbol-list.vue',
      inNav: true,
      icon: 'iconfont icon-add',
      permission: ['stock-symbol-list'],
    },
  ],
}

export default bookRouter
