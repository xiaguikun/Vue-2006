import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () =>
        import ('../views/indexHome.vue'),
    children: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: () =>
                import ('../views/index.vue')
        },
        {
            path: '/classify',
            component: () =>
                import ('../views/classify.vue')
        },
        {
            path: '/shopcar',
            component: () =>
                import ('../views/shopcar.vue')
        },
        {
            path: '/mine',
            component: () =>
                import ('../views/mine.vue')
        }
    ]
}, {
    path: '/details',
    component: () =>
        import ('../views/details.vue')
}]

const router = new VueRouter({
    routes
})

export default router