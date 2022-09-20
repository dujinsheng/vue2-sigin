<!--
 * @Date: 2022-09-15 09:00:16
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-19 18:42:13
 * @FilePath: \新建文件夹\sigin\src\views\LoginPage.vue
-->
<template>
  <div class="loginBackground">
    <div class="headImage">
      <image src="../assets/headImage.jpg"></image>
    </div>
    <div class="box">
      <h1 class="formTitle">输入账号密码进行登录</h1>
      <div class="internalBox">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="Please input userName"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password" class="passwordBox">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="Please input password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="" class="remberBox">
            <el-checkbox v-model="checked">是否记住密码</el-checkbox>
            <a href="javascript:;">注册账号</a>
          </el-form-item>
          <el-form-item>
            <el-button
              class="loginButton"
              type="primary"
              @click="submitForm('ruleForm')"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
        <!-- <div @click="clickFunction">此页面为一个登录页</div> -->
        <!-- <router-link
    :to="{
      name: 'home',
      params: {
        id: 666,
        title: '你好',
      },
    }"
    >跳转</router-link
  > -->
        <!-- <router-link :to="{ path: 'login' }"></router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
// userNameCheck方法可以像这个样子进行引入，也可以在ruleCheck中进行统一暴露，在main.js中统一引入，
// 将统一引入的验证的方法，像这样Vue.prototype.$validate = 同意引入的对象。进行操作
import { userNameCheck } from "../utils/rulesCheck.js";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      checked: false,
      rules: {
        name: userNameCheck(),
        password: [
          // 在这里也可以进行自定义验证
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 11, message: "长度在8到16个字符", trigger: "blur" },
        ],
      },
    };
  },
  // props: ['id', 'title'],
  props: {
    id: {
      type: Number,
      default: null,
    },
    title: {
      type: Number,
      default: null,
    },
  },
  watch: {
    checked: {
      handler(n, o) {
        if (n) {
          if (this.ruleForm.name && this.ruleForm.password) {
            localStorage.setItem("userName", this.ruleForm.name);
            localStorage.setItem("password", this.ruleForm.password);
            // alert("已经将账号和密码保存在了localStorage中");
          } else {
            // alert("请先输入账号和密码再进行保存");
            this.checked = false;
          }
        } else {
          // alert('已经将保存在localStorage中的密码进行了删除')
          localStorage.removeItem("userName");
          localStorage.removeItem("password");
        }
      },
      immediate: false,
    },
  },
  components: {},
  created() {
    if ( sessionStorage.getItem("token")) {
      this.$router.push("/");
    }
    // console.log(this.id, this.title)
  },
  mounted() {
    if (localStorage.getItem("userName") && localStorage.getItem("password")) {
      this.ruleForm.name = localStorage.getItem("userName");
      this.ruleForm.password = localStorage.getItem("password");
      this.checked = true;
    }
  },
  methods: {
    // clickFunction() {
    //   localStorage.setItem("token", `${decodeURIComponent(12581)}`);
    //   this.$router.push({
    //     name: "home",
    //     params: {
    //       id: 125,
    //       title: "此为home页",
    //     },
    //   });
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 在此处应该发送请求，去服务器端对于密码进行验证，如果验证通过，那么应该将页面进行跳转
          if (
            this.ruleForm.name === "admin" &&
            this.ruleForm.password === "admin"
          ) {
            // 在此处进行跳转
            this.$router.push({
              path: "/",
              params: {
                id: 125,
                title: "此为home页",
              },
            });
            sessionStorage.setItem("token", `${decodeURIComponent(12581)}`);
          } else {
            alert("账号或密码不正确");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBackground {
  width: 100%;
  position: relative;
  height: 100%;
  background: url("../assets/loginbackground.jpg") 50% fixed;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .headImage {
    width: 150px;
    height: 150px;
    // width: 12%;
    // height: 20%;
    position: relative;
    left: 50%;
    top: 8%;
    transform: translate(-50%, -0%);
    background-color: rgba(225, 225, 225, 0.2);
    border: 2px solid rgba(225, 225, 225, 0.2);
    // border-radius: 50%;
    background: url("../assets/headImage.jpg");
    background-size: 100%, 100%;
    background-repeat: no-repeat;
  }
}
::v-deep .el-form-item {
  .el-form-item__label {
    color: white;
  }
  .el-form-item__content {
    margin: 0px !important;
  }
}
::v-deep .box {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 30%;
  height: 40%;
  transform: translate(-50%, -50%);
  background: rgba(225, 225, 225, 0.2);
  border-radius: 5%;
  .el-input__inner {
    background-color: rgba(225, 225, 225, 0.2);
    width: 80%;
  }
  .loginButton {
    width: 80%;
    // background-color: rgba(193, 137, 147);
    background-color: rgb(213, 96, 118);
  }
  .internalBox {
    margin-top: 80px;
    margin-left: 20px;
    .passwordBox {
      margin: 0px 0px 10px 0px;
    }
    .remberBox {
      width: 100%;
      margin: 0px;
      .el-form-item__content {
        width: 80%;
        display: flex;
        justify-content: space-around;
        .el-checkbox {
          width: 40%;
          color: white !important;
          margin-left: 0px;
        }
        a {
          width: 40%;
          display: block;
          color: white !important;
          text-align: right;
        }
      }
    }
  }
  .formTitle {
    width: 100%;
    position: absolute;
    top: 20px;
    color: white;
    text-align: center;
  }
}
::v-deep .el-form-item__error {
  margin-left: 40px;
  color: white;
}
::v-deep .el-input .el-input--suffix {
  position: relative;
}
::v-deep .el-input__suffix {
  position: absolute;
  right: 45px;
  top: 0px;
}
</style>