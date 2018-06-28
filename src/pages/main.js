import Vue from 'vue'
import $x from '../assets/js/$x'
import router from '../router/routerMain.js'
import main from '../modules/main.vue'
import store from '../store/main.js'

require('../assets/css/index.scss');

// window.Vue = Vue

// 通用组件，便于处理
Vue.prototype.$x = Vue.$x = store.$x = $x;
$x.setRouter(router);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(main),
});
