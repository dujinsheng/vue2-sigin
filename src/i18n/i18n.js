/*
 * @Date: 2022-09-21 00:00:35
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-21 17:00:35
 * @FilePath: \新建文件夹\sigin\src\i18n\i18n.js
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import en from './en'
import zh from './zh'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: (function () {
    if (localStorage.getItem('language')) {
      return localStorage.getItem('language')
    }
    return 'English'
  }()),
  messages: {
    'English': {
        ...en,
        ...enLocale
    }, //英文语言包
    'Chinese': {
        ...zh,
        ...zhLocale
    }, //中文繁体包
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n