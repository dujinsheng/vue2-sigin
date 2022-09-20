<!--
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-21 00:13:19
 * @FilePath: \新建文件夹\sigin\src\App.vue
-->
<template>
  <div id="app">
    <!-- <nav> -->
      <router-view></router-view>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link> -->
    <!-- </nav> -->
  </div>
</template>
<script>
  export default {
    created() {
      
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
