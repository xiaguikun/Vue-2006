import axios from 'axios';
import qs from 'qs';

import { Toast } from 'vant';

const instance = axios.create({
    baseURL: 'http://www.pudge.wang:3001/',
    timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params: params
            }).then(response => {
                resolve(response);
            }).catch(error => {
                Toast(error.message);
                reject(error);
            })
        })
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            instance.post(url, qs.stringify(data))
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    Toast(error.message);
                    reject(error)
                });
        })

    }
}

export default http