//引入插件
import Vue from "vue";
import VueRouter from "vue-router";

//将VueRouter作为中间件使用
Vue.use(VueRouter);

//定义路由

const routes = [{
    path: '/',
    component: () =>
        import ('../views/index.vue')
}, {
    path: '/video',
    component: () =>
        import ('../views/video.vue')
}, {
    path: '/mini-video',
    component: () =>
        import ('../views/minivideo.vue')
}, {
    path: '/show',
    component: () =>
        import ('../views/show.vue')
}, {
    path: '/mine',
    component: () =>
        import ('../views/mine.vue')
}, {
    path: '*',
    component: () =>
        import ('../views/nofind404.vue')
}];

const router = new VueRouter({
    routes
});

export default router;