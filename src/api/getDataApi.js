/*
 * @Date: 2022-09-15 00:12:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-15 00:15:12
 * @FilePath: \新建文件夹\sigin\src\api\getDataApi.js
 */
import request from '../utils/request'
export const getOne  = function (par) {
    return request({
        method: 'get',
        url: `getOne/${par}`,
        params: {
            a:par
        }
    })
}
export const getTwo = function(par) {
    return request({
        method: 'get',
        url: `getTwo/${par}`,
        params: {
            b:par
        }
    })
}
