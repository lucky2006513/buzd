<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
    </nav>
 <!-- <nav> 标签是 HTML5 中的一个元素，用于定义导航链接的部分。 -->
 <!-- router-link 是 Vue Router 提供的一个组件，用于创建导航链接。 -->
  <!-- to 属性指定了链接的目标路径。 -->
 <!--第一个链接到 / 路径，显示为“首页”。第二个链接到 /about 路径，显示为“关于我们”。  -->
    <router-view></router-view>
 <!-- 
            router-view 是 Vue Router 提供的一个组件，用于渲染与当前路由匹配的组件。
            在这个例子中，<router-view> 会根据用户点击的导航链接，显示相应的组件内容。
            当用户点击“首页”链接时，Vue Router 会显示与 / 路径匹配的组件；
            当用户点击“关于我们”链接时，会显示与 /about 路径匹配的组件。
        -->

  </div>
</template>
