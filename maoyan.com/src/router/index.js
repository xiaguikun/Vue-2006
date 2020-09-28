//引入插件
import Vue from "vue";
import VueRouter from "vue-router";

//去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//将VueRouter作为中间件使用
Vue.use(VueRouter);

//定义路由

const routes = [{
    path: '/',
    redirect: './index'
}, {
    path: '/index',
    component: () =>
        import ('../views/index.vue'),
    children: [{
            path: '/index',
            redirect: '/hot'
        },
        {
            path: '/hot',
            component: () =>
                import ("../components/index/hot.vue")
        },
        {
            path: '/cinema',
            component: () =>
                import ("../components/index/cinema.vue")
        },
        {
            path: '/wait',
            component: function() {
                return import ("../components/index/wait.vue")
            }
        },
        {
            path: '/classics',
            component: () =>
                import ("../components/index/classics.vue")
        }
    ]
}, {
    path: '/video',
    component: () =>
        import ('../views/video.vue'),
    meta: { title: '视频页面' }
}, {
    path: '/mini-video',
    component: () =>
        import ('../views/minivideo.vue'),
    meta: { title: '小视频页面' }
}, {
    path: '/show',
    component: () =>
        import ('../views/show.vue'),
    meta: { title: '演出页面' }
}, {
    path: '/mine',
    component: () =>
        import ('../views/mine.vue'),
    meta: {
        requiresAuth: true,
        title: '我的页面'
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
            next();
        } else {
            next('/login');
        }
    }
}, {
    path: '/detail/:id',
    component: () =>
        import ('../views/detail.vue'),
    meta: {
        fade: true
    }
}, {
    path: '/login',
    component: () =>
        import ("../views/login.vue")
}, {
    path: '/detailtwo/:id',
    component: () =>
        import ('../views/detailtwo')
}, {
    path: '/city',
    component: () =>
        import ('../views/city.vue')
}, {
    path: '*',
    component: () =>
        import ('../views/nofind404.vue')
}];

const router = new VueRouter({
    routes
});

//路由全局前置守卫
router.beforeEach((to, from, next) => {
    // if (to.meta.requiresAuth) {
    //     if (localStorage.getItem('token')) {
    //         next()
    //     } else {
    //         next('/login')
    //     }
    // }
    document.title = to.meta.title ? to.meta.title : 'maoyan.com';
    next();
})

export default router;