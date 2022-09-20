<!--
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-19 18:43:14
 * @FilePath: \新建文件夹\sigin\src\views\AboutView.vue
-->
<template>
  <div class="about">
    <router-link :to="{ path: '/' }">跳转至home页面</router-link>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 下面两个方法为组件内路由守卫
  beforeRouteEnter(to, from, next) {
    // console.log(to, from, next, "组件内路由进入守卫");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log(to, from, next, "组件内路由离开守卫");
    next();
  },
};
</script>
