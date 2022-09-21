<!--
 * @Date: 2022-09-18 15:52:11
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-21 11:07:22
 * @FilePath: \新建文件夹\sigin\src\components\header\LoginStatus.vue
-->
<template>
  <div class="loginStatus">
    <div class="loginStatusBox">
      <div class="loginStatusOne">
        <i class="el-icon-message-solid"></i>
        <i class="el-icon-s-tools"></i>
      </div>
      <div class="loginStatusTwo">
        <div class="circularBorder">
          <i class="el-icon-s-custom"></i>
        </div>
        <span>{{ $t("content.name") }}</span>
      </div>
      <div class="loginStatusThree">EN</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginStatus",
  data() {
    return {};
  },
  created() {
    console.log(this.$t("content.sex"));
  },
};
</script>

<style lang="scss" scoped>
.loginStatus {
  height: 100%;
  width: 100%;
  .loginStatusOne {
    display: inline-block;
    font-size: 20px;
    i {
      padding-right: 20px;
    }
  }
  .loginStatusTwo {
    display: inline-block;
    font-size: 20px;
    position: relative;
    margin-left: 30px;
    .circularBorder {
      display: inline-block;
      width: 25px;
      height: 25px;
      border: 3px solid white;
      border-radius: 20px;
      position: absolute;
      top: 17px;
      left: -25px;
      i {
        font-size: 15px;
        position: absolute;
        top: 3px;
        left: 2px;
      }
    }
    span {
      padding-left: 5px;
      font-size: 15px;
      line-height: 15px;
    }
  }
  .loginStatusThree {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 15px;
    display: inline-block;
  }
}
.loginStatusBox {
  float: right;
}
</style>