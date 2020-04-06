import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import fastclick from 'fastclick';
import "@/assets/iconfont/iconfont.css";
import toast from '@/components/common/toast';
Vue.use(toast);//默认执行toast的insatll函数
/**添加总线***/
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
