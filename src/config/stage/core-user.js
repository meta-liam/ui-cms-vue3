const userRouter = {
  route: null,
  name: null,
  title: '用户管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-huiyuanguanli',
  filePath: 'view/cms-core/user/', // 文件路径
  order: 20,
  inNav: true,
  permission: ['core-users'],
  children: [
    {
      title: '用户列表',
      type: 'view',
      name: 'Symbols',
      route: '/cms/user/list',
      filePath: 'view/cms-core/user/list.vue',
      inNav: true,
      permission: ['core-user-list'],
      icon: 'iconfont icon-huiyuanguanli',
    },
    {
      title: '权限列表',
      type: 'view',
      name: 'Symbols',
      route: '/cms/rbac/power-list',
      filePath: 'view/cms-core/rbac/power-list.vue',
      inNav: true,
      permission: ['core-rbac-powers'],
      icon: 'iconfont icon-yunyingguanli_fuwufenzuguanli',
    },
    {
      title: '角色列表',
      type: 'view',
      name: 'Symbols',
      route: '/cms/rbac/role-list',
      filePath: 'view/cms-core/rbac/role-list.vue',
      inNav: true,
      permission: ['core-rbac-roles'],
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default userRouter
