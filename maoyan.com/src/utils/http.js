const prefix = 'http://www.pudge.wang:3002/api'

const http = {
    get: function(url, params) {
        // 判断是否传参数
        if (params) {
            // url   'http://www.pudge.wang:3002/api/home/topRatedMovies'
            // params   {a:1,b:2}   
            // ->  'http://www.pudge.wang:3002/api/home/topRatedMovies?a=1&b=2'
            let arr = []
            Object.keys(params).forEach((item, index) => {
                    arr.push(item + '=' + params[item])
                })
                // arr = ['a=1', 'b=2']
            url += '?' + arr.join('&')
                // 'http://www.pudge.wang:3002/api/home/topRatedMovies?a=1&b=2'
        }
        return fetch(prefix + url)
            .then(response => response.json())
    },

    post: function(url, params) {
        // 实例化一个FormData对象
        let formData = new FormData()
            // FormData.append(a, 3) 
        for (let key in params) {
            formData.append(key, params[key])
        }
        return fetch(prefix + url, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
    }
}

export default http