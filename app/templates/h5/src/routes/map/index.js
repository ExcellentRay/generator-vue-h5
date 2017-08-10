import houseConfirm from './modules/demo/demo';

export default [
    ...houseConfirm,
    {
        path: '/',
        redirect: '/demo'
    },
    {
        path: '*', // 其他页面，强制跳转到首页
        redirect: '/'
    },
]
