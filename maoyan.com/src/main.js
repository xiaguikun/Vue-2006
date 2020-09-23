import Vue from "vue";
// 引入app.vue这个根组件
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入初始化文件
import "./assets/styles/reset.scss";

//引入iconfontcss文件
import "./assets/font/iconfont.css";

// 引入amfe-flexible插件
import "amfe-flexible"

//用来关闭开发环境的提示信息
Vue.config.productionTip = true;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");