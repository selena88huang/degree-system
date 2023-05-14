//Vue 實例的建立方式，在vue2通過new Vue建立實例，而vue3改為使用createApp
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'


// import Vue from 'vue' //Vue2才適用
import BootstrapVue3 from 'bootstrap-vue-3'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue) //Vue2才適用



// createApp(App).mount('#app')
const app = createApp(App)
app.use(BootstrapVue3)
app.use(router).mount('#app')


// new Vue({  //Vue2寫法
//     render: h => h(App)
//   }).$mount('#app')
