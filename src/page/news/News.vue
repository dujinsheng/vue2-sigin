<!--
 * @Date: 2022-09-18 21:55:51
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-20 20:10:55
 * @FilePath: \新建文件夹\sigin\src\page\news\News.vue
-->
<template>
  <div class="messageBox">
    <div class="jumpToAboutPage">
      <router-link :to="{ path: '/about' }">跳转至about页面</router-link>
    </div>
    <div class="aboutMessage">
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open1">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
      <el-button :plain="true" @click="openCenter">文字居中</el-button>
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
      });
    },
    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },
    openCenter() {
      this.$message({
        message: "居中的文字",
        center: true,
      });
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i>HTML</i> 片段</strong>",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.messageBox {
  height: 100%;
  color: rgb(197, 141, 141);
  font-size: 15px;
  .jumpToAboutPage {
    line-height: 20px;
    width: 100%;
    height: 20px;
  }
}
.aboutMessage {
  width: 100%;
}
</style>
