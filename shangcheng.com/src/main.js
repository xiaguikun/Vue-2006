import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.stylus'
import 'amfe-flexible'


//引用vant组件
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Card } from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')