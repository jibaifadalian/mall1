import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    cartList:[],         /**记录购物车添加的商品 */
}
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})