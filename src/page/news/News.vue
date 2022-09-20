<!--
 * @Date: 2022-09-18 21:55:51
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-19 17:45:34
 * @FilePath: \新建文件夹\sigin\src\page\news\News.vue
-->
<template>
  <div>
    这是消息页面
    <router-link :to="{ path: '/about' }">跳转至about页面</router-link>
  </div>
</template>

<script>
export default {
    name: 'News'
}
</script>

<style lang="scss" scoped>
  div {
    color: rgb(197, 141, 141);
    font-size: 50px;
  }
  </style>