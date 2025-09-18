import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 定义路由规则
let routes = [
    {
        path:'/', // 根路由
        name:'Home',//路由名称
        component:Home //路由组件
    },
    
    {
        path:'/about', // 关于我们路由
        name:'About',//路由名称
        component:About //路由组件
    }
];

let router = createRouter({
    history:createWebHistory(), // 路由模式
    // createWebHashHistory(),他使得路由更加友好，不会在url中出现#
    routes
    // routes是一个数组，里面包含了应用的所有路由规则
    // 在这个数组中，每一个路由规则都是一个对象，对象中包含三个属性：
    // path：路由路径
    // name：路由名称
    // component：该路由对应的组件不用带.vue后缀
})

export default router; // 导出路由实例，在main.js中引入，并注册到vue实例中