<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@charset "UTF-8"; // 解决中文注释问题;
@include label; // 清除默认样式

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

html {
  font-size: $baseFontSize;
}

// 隐藏滚动条
// ::-webkit-scrollbar{
//   display:none;
// }
</style>
