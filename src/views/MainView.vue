<!--
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-22 14:31:14
 * @FilePath: \新建文件夹\sigin\src\views\MainView.vue
-->
<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 此处的三个组件分别为logo,子系统跳转链接，登录状态显示 -->
        <div class="leftHeader" @click="clickCancelGetOneAndGetTWO">
          <LogoImage class="logoIcon"></LogoImage>
        </div>
        <div class="rightHeader">
          <JumpStatus
            class="jumpStatus"
            @getNowPathInJump="useNextPathInJump"
          ></JumpStatus>
          <LoginStatus class="loginStatus"></LoginStatus>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <!-- 此为展示 -->
          <NavMenu @getNowPath="useNextPath"></NavMenu>
        </el-aside>
        <!-- 中间部分 -->
        <el-main>
          <router-view></router-view>
          <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import LoginStatus from "../components/header/LoginStatus.vue";
import JumpStatus from "@/components/header/JumpStatus.vue";
import LogoImage from "@/components/header/LogoImage.vue";
import NavMenu from "@/components/sideBar/navMenu.vue";

import { getOne, getTwo, sourceOne } from "../api/getDataApi";
import { postOne, postTwo, sourceTwo } from "../api/postDataApi";
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    LogoImage,
    LoginStatus,
    JumpStatus,
    NavMenu,
  },
  created() {
    // 当该组件进入之后，如果没有检查到token的时候，则返回我们的登陆界面
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
    }
    // console.log(this.$router)
    // console.log(this.$route.params)
    // console.log(getOne, getTwo, postOne, postTwo)
    getOne(123);
    getTwo(234);
    postOne('www');
    postTwo('aaa')
  },
  mounted() {},
  methods: {
    // 使用自定义事件对于参数进行接受，并且完成路由的跳转
    useNextPath(nextPath) {
      if (this.$route.path !== nextPath) {
        this.$router.push({
          path: nextPath,
        });
      }
    },
    useNextPathInJump(nextPath) {
      this.$nextTick(() => {
        this.$router.push({
          path: nextPath,
        });
      });
    },
    // 对于请求进行取消
    clickCancelGetOneAndGetTWO() {
      sourceOne['CancelGetOne']('第一条获取数据的请求被取消了')
      sourceOne['CancelGetTwo']('第二条获取数据的请求被取消了')
      sourceTwo['CancelPostOne']('第一条postOne请求被取消了')
      sourceTwo['CancelPostTwo']('第二条postTwo请求被取消了')
    },
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .el-container,
  .is-vertical {
    width: 100%;
    height: 100%;
  }
}
.el-header {
  background-color: rgb(32, 32, 32);
  color: white;
  text-align: center;
  line-height: 60px;
  padding: 0px;
  .leftHeader {
    display: inline-block;
    width: 200px;
    height: 100%;
    float: left;
  }
  .rightHeader {
    display: flex;
    justify-content: space-between;
    // .jumpStatus {
    //   display: inline-block;
    // }
    // .loginStatus {
    //   display: inline-block;
    // }
  }
  // .logoIcon {
  //   width: 200px;
  //   display: inline-block;
  // }
}

.el-aside {
  background-color: rgb(52, 52, 52);
  color: white;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: rgb(238, 239, 241);
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-main {
  padding: 0px;
}
</style>>