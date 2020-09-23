// 用于管理所有的接口信息

import http from './http'

// 首页最受欢迎接口
export function getTopRated(params) {
    return http.get('/home/topRatedMovies', params)
}

// 首页的列表接口
export function postData(params) {
    return http.post('/home/movieOnInfoList', params)
}

//上拉加载列表的接口

export function pullUploadData(params) {
    return http.post('/home/moreComingList', params);
}