import {http} from './http';
export function getHomeMultidata() {
  return http({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return http({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
  
}