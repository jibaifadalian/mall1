import {
  ADD_CART,
  ADD_COUNTER
} from './const'
export default {
  /**dispatch 可以返回promise */
  addCart(context, playLoad) {
    return new Promise((resolve,reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === playLoad.iid);
        if (oldProduct) {
          context.commit(ADD_COUNTER, oldProduct);
          resolve('数量加1')
        } else {
          playLoad.count = 1;
          context.commit(ADD_CART, playLoad)
          resolve('添加到购物车')
        }
    })
  }
}