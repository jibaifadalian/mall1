import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import fastclick from 'fastclick';
import "@/assets/iconfont/iconfont.css";

import toast from '@/components/common/toast';
Vue.use(toast);//默认执行toast的insatll函数


import Loading from "./utils/index";
Vue.use(Loading)
/**添加总线***/
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

//解决移动端延迟
fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
