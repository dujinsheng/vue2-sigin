/*
 * @Date: 2022-09-14 20:39:41
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-15 00:11:45
 * @FilePath: \新建文件夹\sigin\src\api\postDataApi.js
 */
import request from '../utils/request.js'

const postOne  = function (canshu) {
    return request({
        method: 'post',
        url: 'postOne',
        data: canshu,
        params: {
            a:canshu
        }
    })
}
const postTwo = function(canshu) {
    return request({
        method: 'post',
        url: 'postTwo',
        data: canshu,
        params: {
            b:canshu
        }
    })
}
export {postOne, postTwo}