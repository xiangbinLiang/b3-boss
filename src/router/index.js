import Login from '@/views/login/index'
import Index from '@/views/index/index'

export const main = [
    {path: '/login',name: '登录',componentName:Login},
    {path: '/',exact:true, name: '首页',componentName:Index}
]

export const menus=[    //菜单相关路由

]

export const roterConfig = {
    main,menus
}