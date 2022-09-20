/*
 * @Date: 2022-09-19 18:18:48
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-20 16:22:11
 * @FilePath: \新建文件夹\sigin\src\store\header.js
 */
const state = {
  // 当前的面包屑导航
  tagsList: [
    { name: 'news', type: '' }
  ],
  // 当前左边的侧边栏选中状态
  nowNavMenu: 'news',
}
const getters = {

}
const actions = {
  clickRoute(context, path) {
    // 判断当前点击的路由是否已经存在于state中的tagsList了
    let had = null;
    let ind = null
    state.tagsList.forEach((element, index) => {
      if (element.name === path) {
        had = true;
        ind = index;
      }
    })
    // 如果当前点击的路由已经存在于state中的tagsList了，那么将该条路由数据在tagsList中放在最后
    if (had) {
      state.tagsList.splice(ind, 1) // 在state.tagsList中将之前已经存在的路由数据进行删除
      state.tagsList.push({
        name: path,
        type: ''
      })
    } else {
      state.tagsList.push({
        name: path,
        type: ''
      })
    }
    context.commit('changeStateTagsList', path)
  },
  changeJumpRoute(context, path) {
    // 每次点击面包屑导航的时候，对于当前侧边栏的选中状态进行改变  || 删除某个面包屑导航的时候侧边栏也需要改变
    state.nowNavMenu = path.name;
    context.commit('changeStateTagsListOrder', path)
  }
}
const mutations = {
  changeStateTagsList(state, value) {
    // console.log(state, value, '这是左边的导航栏点击之后,对于state中的数据进行修改的结果')
  },
  changeStateTagsListOrder(state, value) {
    console.log(state, value)
    const data = value.name;
    let ind
    // 经过循环遍历，从而找到当前点击的tag的index
    state.tagsList.forEach((element, index) => {
      if(element.name === data) {
        ind = index;
      }
    })
    // 通过索引位置，删除当前点击的tag
    state.tagsList.splice(ind, 1)
    // 再将当前点击的tag放入state.tagsList数组的最后一位
    state.tagsList.push({
      name: data,
      type: ''
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}