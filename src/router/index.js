import App from '@/App'

// 实现按需加载
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')

// 定义路由
export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            component: home
        }
    ]
}]
