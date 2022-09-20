<!--
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-18 15:34:57
 * @FilePath: \新建文件夹\sigin\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    这是hellow组件
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
