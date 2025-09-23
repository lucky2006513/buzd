import  { createRouter,createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
// 定义路由
const routes = [
    {
        path:'/',  // 根路由
        name:'Home',  // 路由名称
        component:Home  // 路由指定的组件
    },
    {
        path:'/about',
        namne:'About',
        component:About
    }
];
// 创建路由实例
const router = createRouter({
    history:createWebHistory(),  // 这里定义了路由使用的history模式。
    // createWebHistory是Vue Router提供的一个函数，用于创建HTML5 History模式。
    // 这种模式利用了HTML5 History API使得路由更加友好，不会在URL中显示#，这对于SEO和用户体验都更好。
    routes 
    // 这是传递给createRouter函数的一个对象属性。
    // routes是一个数组，包含了应用中所有的路由配置。
    // 在这个数组中，每个路由配置都是一个对象，对象中包含三个属性：path（路由路径）、name（路由名称）、component（该路径对应的组件）。
});
export default router; // 导出路由实例
