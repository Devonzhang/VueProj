// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 1. 导入组件
import Goods from "./components/Goods/Goods"
import Ratings from "./components/Ratings/Ratings"
import Seller from "./components/Seller/Seller"

// 安装vue-router插件

Vue.use(VueRouter);

Vue.config.productionTip = false

// 2. 定义路由
const routes = [{
        path: '/',
        // 重定向
        redirection: '/goods'


    }, {
        path: '/goods',
        components: Goods
    },
    {
        path: '/ratings',
        components: Ratings
    },
    {
        path: '/seller',
        components: Seller
    }
];

// 3. 创建router实例
const router = new VueRouter({
    routes
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    // 4. 创建和挂载根实例
    router
})
