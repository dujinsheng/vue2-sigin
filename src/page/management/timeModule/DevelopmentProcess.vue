<!--
 * @Date: 2022-09-18 22:03:04
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-20 20:23:07
 * @FilePath: \新建文件夹\sigin\src\page\management\timeModule\DevelopmentProcess.vue
-->
<template>
  <el-transfer v-model="value" :data="data"></el-transfer>
</template>

<script>
export default {
  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4],
    };
  },
};
</script>