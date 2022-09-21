<!--
 * @Date: 2022-09-18 15:52:11
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-21 17:31:16
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
        <!-- 登陆的任务昵称和退出按钮 -->
        <el-dropdown trigger="hover" @command="handleCommandAboutPerson">
          <span>
            <div class="circularBorder">
              <i class="el-icon-s-custom"></i>
            </div>
            <span>{{ $t("content.name") }}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              style="text-align: center"
              command="oneSelfInformation"
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item style="text-align: center" command="signOut"
              >退出</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="loginStatusThree">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ showLang }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              :class="showLang === 'English' ? 'blueBack' : ''"
              style="text-align: center"
              command="English"
              >English</el-dropdown-item
            >
            <el-dropdown-item
              :class="showLang === 'Chinese' ? 'blueBack' : ''"
              style="text-align: center"
              command="Chinese"
              >中文</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginStatus",
  data() {
    return {
      showLang: localStorage.getItem("language")
        ? localStorage.getItem("language")
        : "English",
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    handleCommand(command) {
      localStorage.setItem("language", command);
      this.$i18n.locale = command;
      this.showLang = command;
    },
    handleCommandAboutPerson(command) {
      if (command === 'signOut') {
        sessionStorage.removeItem('token');
        window.location.href = ''
      }
    }
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
        color: white;
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.blueBack {
  background-color: #409eff;
}
</style>