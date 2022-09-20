<!--
 * @Date: 2022-09-18 17:20:53
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-20 16:00:18
 * @FilePath: \新建文件夹\sigin\src\components\sideBar\navMenu.vue
-->
<template>
  <div class="sideBar">
    <el-row>
      <el-col :span="12">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="defaultActived"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="news">
            <template slot="title">
              <i class="el-icon-message-solid"></i>
              <span slot="title">消息列表</span>
            </template>
          </el-menu-item>
          <!-- 使用v-for进行循环，对于列表进行渲染 -->
          <el-submenu
            v-for="first in menuList"
            :key="first.title"
            :index="first.index"
          >
            <template slot="title">
              <i :class="first.icon"></i>
              <span slot="title">{{ first.title }}</span>
            </template>
            <el-submenu
              v-for="second in first.secondList"
              :key="second.title"
              :index="second.index"
            >
              <template slot="title">
                <i :class="second.icon"></i>
                <span slot="title">{{ second.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="third in second.thirdList"
                  :key="third.title"
                  :index="third.index"
                  >{{ third.title }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      menuList: [
        {
          index: "1",
          icon: "el-icon-s-grid",
          title: "基础信息",
          secondList: [
            {
              index: "1-1",
              icon: "el-icon-office-building",
              title: "管理目录",
              thirdList: [
                {
                  index: "processManagement",
                  icon: "el-icon-document",
                  title: "流程管理",
                  fourthList: [],
                },
                {
                  index: "nodeManagement",
                  icon: "el-icon-document",
                  title: "节点管理",
                  fourthList: [],
                },
              ],
            },
            {
              index: "1-2",
              icon: "el-icon-school",
              title: "信息目录",
              thirdList: [
                {
                  index: "informationManagement",
                  icon: "el-icon-document",
                  title: "信息管理",
                  fourthList: [],
                },
                {
                  index: "feedbackManagement",
                  icon: "el-icon-document",
                  title: "回馈管理",
                  fourthList: [],
                },
              ],
            },
          ],
        },
        {
          index: "2",
          icon: "el-icon-s-data",
          title: "发展管理",
          secondList: [
            {
              index: "2-1",
              icon: "el-icon-table-lamp",
              title: "时间模块",
              thirdList: [
                {
                  index: "timeManagement",
                  icon: "el-icon-document",
                  title: "时间管理",
                  fourthList: [],
                },
                {
                  index: "developmentProcess",
                  icon: "el-icon-document",
                  title: "发展流程",
                  fourthList: [],
                },
              ],
            },
            {
              index: "2-2",
              icon: "el-icon-house",
              title: "会议模块",
              thirdList: [
                {
                  index: "topicMeeting",
                  icon: "el-icon-document",
                  title: "主题会议",
                  fourthList: [],
                },
              ],
            },
          ],
        },
        // {
        //   index: "3",
        //   icon: "el-icon-document-copy",
        //   title: "主题会议",
        //   secondList: [
        //     {
        //       index: "3-1",
        //       icon: "el-icon-shopping-cart-full",
        //       title: "分组一",
        //       thirdList: [
        //         {
        //           index: "3-1-1",
        //           icon: "el-icon-document",
        //           title: "选项一",
        //           fourthList: [],
        //         },
        //         {
        //           index: "3-1-2",
        //           icon: "el-icon-document",
        //           title: "选项二",
        //           fourthList: [],
        //         },
        //       ],
        //     },
        //     {
        //       index: "3-2",
        //       icon: "el-icon-sell",
        //       title: "分组二",
        //       thirdList: [],
        //     },
        //   ],
        // },
        // {
        //   index: "4",
        //   icon: "el-icon-s-tools",
        //   title: "商业展板",
        //   secondList: [
        //     {
        //       index: "4-1",
        //       icon: "el-icon-discount",
        //       title: "分组一",
        //       thirdList: [
        //         {
        //           index: "4-1-1",
        //           icon: "el-icon-document",
        //           title: "选项一",
        //           fourthList: [],
        //         },
        //         {
        //           index: "4-1-2",
        //           icon: "el-icon-document",
        //           title: "选项二",
        //           fourthList: [],
        //         },
        //       ],
        //     },
        //     {
        //       index: "4-2",
        //       icon: "el-icon-thumb",
        //       title: "分组二",
        //       thirdList: [],
        //     },
        //   ],
        // },
      ],
      defaultActived: 'news'
    };
  },
  computed:{
    // defaultActived: {
    //   get() {
    //     this.$nextTick(() => {
    //       console.log('正在获取this.$store.state.header.nowNavM获取到的数据为', this.$store.state.header.nowNavMenu)
    //       return this.$store.state.header.nowNavMenu;
    //     })
    //   },
    //   set(e) {
    //   }
    // }
  },
  watch: {
    "$store.state.header.nowNavMenu": {
      handler(n, o) {
        console.log(n,o )
        this.$nextTick(() => {
          this.defaultActived = n
        })
      },
      immediate: true,
    }
  },
  mounted() {
  },
  methods: {
    // handleOpen(key, keyPath) { 
    // },
    // handleClose(key, keyPath) {
    // },
    handleSelect(key, keyPath) {
      // 触发自定义事件，将参数传递至父组件
      this.$emit('getNowPath', key);
      this.$store.dispatch('header/clickRoute', key);
    },
  },
};
</script>

<style lang="scss" scoped>
.sideBar {
  width: 100%;
  height: 100%;
  .el-col,
  .el-col-12 {
    width: 100%;
    height: 100%;
    .el-menu {
      background-color: rgb(52, 52, 52);
    }
  }
}
::v-deep .el-menu-item-group__title {
  display: none;
}
// ::v-deep .el-icon-arrow-down:before {
//   display: none;
// }
</style>