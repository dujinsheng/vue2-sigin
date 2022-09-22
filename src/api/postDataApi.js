/*
 * @Date: 2022-09-14 20:39:41
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-22 14:59:35
 * @FilePath: \新建文件夹\sigin\src\api\postDataApi.js
 */
import request from '../utils/request.js'
import axios from 'axios'
const CancelToken = axios.CancelToken;
let sourceTwo = {}
const postOne = function (canshu) {
    return request({
        method: 'post',
        url: 'postOne',
        data: canshu,
        params: {
            a: canshu
        },
        cancelToken: new CancelToken(function executor (cancel) {
            sourceTwo['CancelPostOne'] = cancel
        })
    })
}
const postTwo = function (canshu) {
    return request({
        method: 'post',
        url: 'postTwo',
        data: canshu,
        params: {
            b: canshu
        },
        cancelToken: new CancelToken(function executor (cancel) {
            sourceTwo['CancelPostTwo'] = cancel
        })
    })
}
export { postOne, postTwo, sourceTwo}