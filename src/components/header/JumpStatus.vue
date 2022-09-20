<!--
 * @Date: 2022-09-18 15:52:11
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-20 19:56:01
 * @FilePath: \新建文件夹\sigin\src\components\header\JumpStatus.vue
-->
<template>
  <div class="breadcrumb">
    <div class="tagBox">
      <el-tag
        class="tagJump"
        :ref="tag.name"
        :class="tag.name === $route.name ? 'specilStyle': null"
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type"
        effect="plain"
        @close="handleClose(tag)"
        @click="jumpRoute(tag)"
      >
        {{ tag.name }}
      </el-tag>
    </div>
  </div>
</template>
  
  <script>

export default {
  name: "JumpStatus",
  data() {
    return {
      // tags: [],
    };
  },
  computed: {
    tags: {
      get() {
        // 将数据转化为Json字符串，再将Json字符串转换为原数据类型
        // JSON.parse(JSON.stringify(this.$store.state.header.tagsList));
        return this.$store.state.header.tagsList;
      },
      set() {
        // 这是对于tags进行修改时的操作函数
      },
    },
  },
  watch: {
    "$store.state.header.nowNavMenu": {
      handler(n, o) {
        // 监视数据
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
    
  },
  methods: {
    handleClose(item) {
      let ind // 寻找当前删除的变量，在tags中的索引值
      this.tags.forEach((element, index) => {
        if (item.name === element.name) {
          ind = index;
        }
      });
      if (ind) {
        // this.$nextTick(() => { //如果这里的this.$nextTick不注释掉的话，会导致后面的'getNowPathInJump'自定义事件失去效果
          this.tags.splice(ind, 1);
        // });
      }
      this.$emit('getNowPathInJump', this.tags[this.tags.length - 1].name);
      this.$store.dispatch('header/changeJumpRoute', this.tags[this.tags.length - 1])
      // 因为计算属性中的tags和this.$store.state.header.tagsList是共用的同一个地址，
      // 所以呢，对于tags中的操作，相当于是操作了this.$store.state.header.tagsList
    },
    jumpRoute(item) {
      // 对于store中header里面的state数据进行修改,在点击了tag之后，会跳转到对应的路由上，同时tag也需要转移到最后一位
      this.$store.dispatch('header/changeJumpRoute', item)
      this.$router.push({
        path: item.name
      });
    },
  },
};
</script>
  
<style lang="scss" scoped>
.breadcrumb {
  width: 100%;
  height: 100%;
  position: relative;
  .breadcrumbBox {
    position: absolute;
    top: 26px;
    left: 0px;
  }
  .tagBox {
    position: absolute;
    left: 0px;
    top: 9px;
  }
}
::v-deep .el-breadcrumb__inner {
  color: white;
}
::v-deep .el-breadcrumb__inner a {
  color: rgb(136, 121, 121);
}
::v-deep .el-breadcrumb__inner .is-link {
  color: rgb(136, 121, 121);
}
.tagJump {
  margin-right: 10px;
  height: 15px;
  line-height: 15px;
}
::v-deep .specilStyle {
  background-color: black;
  color: white;
}
</style>