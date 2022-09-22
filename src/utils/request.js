/*
 * @Date: 2022-09-14 16:49:06
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-22 13:35:16
 * @FilePath: \新建文件夹\sigin\src\utils\request.js
 */
// 引入axios
import axios from 'axios';
// 引入i18n
import i18n from '@/i18n/i18n';
import router from '@/router/index';



// 新创建axios实例, 并且传入该实例的配置
const request = axios.create({
    // 设置BaseUrl
    baseURL: 'http://localhost:8000/',
    // 设置延迟
    timeout: 1000 * 60,
    // 设置请求头
    headers: { 'control-resourse-origin-sharing': '*' },
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 1.获取token
    // 2.如果存在token的情况,可以在自定义的请求头中携带token
    // 3.可以在请求头中携带语言
    // 4.可以在请求头中携带当前的URL
    // 5.如果不存在token的话, 只在请求头中携带当前的URL
    const hasToken = '获取token在此不做展示'
    if (hasToken) {
        config.headers['Authorization'] = `${hasToken}`;
        config.headers['content-language'] = i18n.locale == 'Chinese' ? 'Chinese' : 'English';
        config.headers['fromUrl'] = '定义一个获取当前Url的方法并且调用，从而获得URL';
    } else {
        config.headers['fromUrl'] = '定义一个获取当前Url的方法并且调用，从而获得URL';
    }

    return config;
}, function (error) {

    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    const res = response.data;
    if ((response.request.responseType && response.request.responseType.indexOf('arraybuffer') !== -1) ||
        (response.headers['content-type'] && response.headers['content-type'].indexOf('application/json')) == -1) {
        return response;
    }
    // 对响应数据做点什么
    if (res.code !== 20000 && res.code !== 200 && res.code !== "success") {
        // 消息提醒的warning处理
        if (res.code === 2) {
            MessageBox.alert(i18n.t(res.msg), 'Warning', {
                customClass: 'cusConfirmMessageClass',
                confirmButtonText: i18n.t('CLOSE_TEXT'),
                confirmButtonClass: 'cusConfirmButtonClass',
                type: 'warning'
            }).then(() => {
                // 跳转到home路由组件
                router.push('/')
                done()
            }).catch(action => {
                // 跳转到home路由组件
                router.push('/')
                done()
            })
            return
        }
        // if (res.code != 401 || '获取token在此不做展示') {
        //     _Message({
        //         message: res.message || res.msg || 'Error',
        //         type: 'error',
        //         duration: 3 * 1000
        //     })
        // }

        // 如果是401需要处理重新登录 begin
        if (res.code === 401) {
            const hasToken = '获取token在此不做展示';
            // 下面紧挨着的应该为跳转到登陆页面的
            // await store.dispatch('auth/queryAuthRender', { force: true, forceSsoLogin: !!hasToken });
            return res;
        }
        return Promise.reject(new Error(res.message || res.msg || 'Error'))
    } else {
        return res
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default request