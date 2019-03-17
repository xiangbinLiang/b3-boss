

export const _fetch = (url, method, params) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            })
    })

}
export const get = (url, params) => {
    return _fetch(url, 'GET', params)
}
export const post = (url, params) => {
    return _fetch(url, 'POST', params)
}

let LOGIN_DATA = 'B3-platform@login';

/**
 * 判断用户是否登陆
 * @returns {boolean}
 */
export const isLogin = () => {
    let data = sessionStorage.getItem(LOGIN_DATA)
    if (!data) {
        data = sessionStorage.getItem(LOGIN_DATA)
    }

    if (!data) {
        return false
    }

    return data != null
}


