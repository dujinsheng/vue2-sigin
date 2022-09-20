<!--
 * @Date: 2022-09-18 15:52:11
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-21 00:34:32
 * @FilePath: \新建文件夹\sigin\src\components\header\LoginStatus.vue
-->
<template>
  <div class="loginStatus">
    <div class="loginStatusOne">
      <i class="el-icon-message-solid"></i>
      <i class="el-icon-s-tools"></i>
    </div>
    <div class="loginStatusTwo">
      <i class="el-icon-user-solid"></i>
      <span>{{$t('content.name')}}</span>
      <input type="text" :placeholder="$t('content.name')">
    </div>
    <div class="loginStatusThree">EN</div>
  </div>
</template>

<script>
export default {
  name: "LoginStatus",
  data() {
    return {};
  },
  created() {
    console.log(this.$t('content.sex'))
  },
};
</script>

<style lang="scss" scoped>
.loginStatus {
  height: 100%;
  width: 100%;
  .loginStatusOne {
    float: left;
  }
  .loginStatusTwo {
    float: left;
  }
  .loginThree {
    float: left;
  }
}
</style>