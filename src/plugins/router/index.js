import Vue from 'vue'
import VueRouter from 'vue-router'

// import AuthCheck from './auth-check'

import Landing from '@/pages/landing'
import NotFound from '@/pages/error/error404'

import Dashboard from '@/pages/dashboard'

import Login from '@/pages/login'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/not-found',
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            // beforeEnter: AuthCheck
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    if( from == to ) return
    let found = router.options.routes.some(r => {
        return r.name === to.name
    })

    if (!found) {
        next('/not-found')
        return
    }

    next()
})

export default router
