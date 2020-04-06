import {
  ADD_CART,
  ADD_COUNTER
} from './const'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [ADD_CART](state, payload) {
    /模型中添加选择属性/
    payload.checked = true;
    state.cartList.push(payload);
  },
}