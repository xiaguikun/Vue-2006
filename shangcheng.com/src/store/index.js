import Vue from 'vue'
import Vuex from 'vuex'

import { getBanner, postRecommed } from "../utils/api"

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        bannerData: [],
        recommedData: []
    },
    mutations: {
        getBannerList(state, payload) {
            state.bannerData = payload.list;
        },
        postRecommedList(state, payload) {
            state.recommedData = payload.list;
        }
    },
    actions: {
        async getBannerList({ commit }) {
            const res = await getBanner();
            // console.log(res);
            commit('getBannerList', res.data.result)
        },
        async postRecommedList({ commit }) {
            const res = await postRecommed();
            console.log(res);
            commit('postRecommedList', res.data.result)
        }
    },
    modules: {}
})