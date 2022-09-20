/*
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-21 00:38:26
 * @FilePath: \新建文件夹\sigin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss'
import i18n from '@/i18n/i18n.js'
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});
// Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  },
  render: h => h(App)
}).$mount('#app')
