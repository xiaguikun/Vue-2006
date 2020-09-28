import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    //存放状态数据
    state: {
        nowCity: '全国',
        cityId: ''
    },
    //存放方法，一般是同步函数方法，通过其他页面的this.$store.commit('方法名'，传参)
    mutations: {
        clickNowCity(state, payload) {
            state.nowCity = payload.ite.name;
            state.cityId = payload.ite.cityId;
        }
    },
    //存放方法，一般是异步方法，通过其他页面的this.$store.dispatch('actions里面的方法名'，传参)
    //在action 这个option中定义 方法名(context,payload){context.commit(mutations里面的方法名，传参)}
    actions: {

    },
    modules: {}
});