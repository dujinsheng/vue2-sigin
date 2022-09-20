<!--
 * @Date: 2022-09-18 15:52:11
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-20 19:53:37
 * @FilePath: \新建文件夹\sigin\src\components\header\LogoImage.vue
-->
<template>
  <div class="logoBox">
    <img src="@/assets/logo.jpg">logo</img>
  </div>
</template>
  
  <script>
export default {
  name: "LogoImage",
  data() {
    return {};
  },
  created() {},
};
</script>
  
  <style lang="scss" scoped>
.logoBox {
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 80%;
  }
}
</style>