import { http } from './http';
export function getDetail(iid) {
 return http({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommand() {
  return http({
    url:'/recommend'
  })
}
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;   
    this.shopUrl = shopInfo.shopUrl; 
  }
}

export class GoodsParam {
  constructor(info,rule) {
    this.info = info.set;
    this.sizes = rule.tables;
    this.images = info.images ? info.images[0] : '';
  }
}