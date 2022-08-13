import homeRouter from './home-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    component: () => import('@/view/home/home'),
    children: [...homeRouter],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/login'),
  },
  {
    path: '/stock/detail',
    name: 'stock-detail',
    component: () => import('@/view/stock-data/detail'),
  },
  {
    path: '/stock/cockpit',
    name: 'stock-cockpit',
    component: () => import('@/view/stock-data/cockpit'),
  },
  {
    redirect: '/404',
    path: '/:pathMatch(.*)',
  },
]

export default routes
