// 整体的路由控制
import Login from './views/Login.vue';
import Home from './views/Home.vue';

let routes = [
  {
    path: '/home', // 路由名称
    component: Home,  // 组件
    name: '',
    hidden: true    // 隐藏掉
  },
  {
    path: '/',
    component: Home,
    name: 'demo1',
    iconCls: 'el-icon-menu',
    children: [
      { path: '/property-manage', name: 'test1' },
      { path: '/village-manage', name: 'test2' },
    ]
  }
]

export default routes
