import App from '@/App'

// 实现按需加载
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const about = r => require.ensure([], () => r(require('@/page/about')), 'about')

// 定义路由
export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            component: home
        },
        {
            path: '/about',
            component: about
        }
    ]
}]
