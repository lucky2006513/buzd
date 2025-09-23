<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="sendMessage">点击向父组件发送消息</button>
  </div>
</template>
<script setup>
import { defineProps,defineEmits} from 'vue';
defineProps({
  message:{
    type:String,
    required:true 
  }
});
const title ='Hello,Vue3';
const emit = defineEmits(['send']);
const sendMessage =()=>{
  emit('send','这是子组件发送的消息');
};
</script>