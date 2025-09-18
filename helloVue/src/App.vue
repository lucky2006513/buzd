<script setup>
</script>
  
<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于我们</router-link>
      <!-- router-link 是Vue Router 提供的一个组件，用于创建导航链接 -->
       <!-- to 属性指定了链接的目标路径 -->
      <router-view></router-view>
      <!-- router-view 是Vue Router 提供的一个组件，用于显示匹配的组件 -->
    </nav>
  </div>
</template>

<style scoped>

</style>
