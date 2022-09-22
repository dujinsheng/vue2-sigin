/*
 * @Date: 2022-09-15 00:12:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-22 14:59:16
 * @FilePath: \新建文件夹\sigin\src\api\getDataApi.js
 */
import axios from 'axios'
import request from '../utils/request'
const CancelToken = axios.CancelToken;
export let sourceOne = {}
export const getOne = function (par) {
    return request({
        method: 'get',
        url: `getOne/${par}`,
        params: {
            a: par
        },
        cancelToken: new CancelToken(function executor (cancel) {
            sourceOne['CancelGetOne'] = cancel
        })
    })
}
export const getTwo = function (par) {
    return request({
        method: 'get',
        url: `getTwo/${par}`,
        params: {
            b: par
        },
        // 这里需要注意cancelToken的首字母为小写
        cancelToken: new CancelToken(function executor(c) {
            sourceOne['CancelGetTwo'] = c
        }),
        // cancelToken: new CancelToken(function (cancel) {
        //     sourceOne['CancelGetTwo'] = cancel
        // })
    })
}