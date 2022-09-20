/*
 * @Date: 2022-09-14 16:49:06
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-14 21:29:15
 * @FilePath: \新建文件夹\sigin\src\utils\request.js
 */
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 1000,
    headers: {'control-resourse-origin-sharing': '*'},
})

export default request