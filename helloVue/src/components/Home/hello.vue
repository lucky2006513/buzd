<script setup>
// import { defineProps } from 'vue';
// 这边从vue自带的包中引入了defineProps对象，该对象的方法是用来定义组件的props属性的
import { defineProps,defineEmits } from 'vue';
// difineProps 用于声明当前组件接受父组件的props属性
// defineEmits 用于声明当前组件发出的事件

// 定义 props属性
defineProps({
    message: {
        type: String,
        required: true
    }
});

const title = 'Hello, Vue 3!';

// 定义emit事件
const emit = defineEmits(['send']); // 定义一个名为send的事件
// 发送消息给父组件
const sendMessage = () => {
    emit('send',`这是子组件发送的消息`)
    // 表示出发名为 send 的事件,并且传递了一个字符串 '这是子组件发送的消息' 作为事件的参数
    // 父组件可以通过监听 send 事件来接受子组件传递的消息，并执行相应的操作
}

</script>
<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <button @click="sendMessage">点击向父组件发送消息</button>
    </div>
</template>
