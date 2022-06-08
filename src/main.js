import Vue from 'vue'
// vue3 加入loading套件
// import Loading from 'vue3-loading-overlay'
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// vue2 加入loading套件
// import VueLoading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

Vue.config.productionTip = false
// 全域方式載入此元件
// Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
