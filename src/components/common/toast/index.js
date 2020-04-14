import Toast from './Toast'
const obj = {}
obj.install = function(Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //2.根据组件构造器，new的方式，创建一个组件对象
  const toast = new toastConstructor();
  //3.将组件对象手动挂载在某个元素上
  toast.$mount(document.createElement('div'));
  //4.将toast.$el追加在body中（对应的就是div）  
  document.body.appendChild(toast.$el);
  //5.组件挂在vue原型上
  Vue.prototype.$toast = toast;
}
export default obj;