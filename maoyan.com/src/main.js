import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//用来关闭开发环境的提示
Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");