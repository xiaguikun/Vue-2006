import http from './http';

//请求轮播图数据
export function getBanner(params) {
    return http.get('/home/banner', params);
}

//请求推荐商品数据
export function postRecommed(params) {
    return http.post('/home/recommend', params);
}