const userRouter = {
  route: null,
  name: null,
  title: '用户管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/cms-core/user/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '用户列表',
      type: 'view',
      name: 'Symbols',
      route: '/cms/user/list',
      filePath: 'view/cms-core/user/list.vue',
      inNav: true,
      icon: 'iconfont icon-add',
    },
  ],
}

export default userRouter
