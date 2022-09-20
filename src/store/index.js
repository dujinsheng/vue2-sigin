/*
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-19 18:44:09
 * @FilePath: \新建文件夹\sigin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import header from './header'
export default new Vuex.Store({
  modules: {
    header,
  }
})
