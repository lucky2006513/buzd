<script setup>
import helloWorld from '../components/Home/hello.vue';
import { ref } from 'vue';

const receivedMessage = ref(''); // 接受子组件传递的数据
const handleSend = (message) => {
    receivedMessage.value = message; // 更新接受的数据
}
</script>

<template>
    <div>
        <router-link to="/">首页</router-link> |
        <router-link to="/about">关于我们</router-link>
        <h1>首页</h1>
        <p>欢迎来到首页！</p>
         <helloWorld message="这是从父组件传递的数据！" @send="handleSend"/>
         <!-- @send="handleSend"绑定子组件的 send 事件 ,并传递了handleSend方法 -->
        <p>{{ receivedMessage }}</p>
        <!-- 接受子组件传递的数据 -->
    </div>
</template>
