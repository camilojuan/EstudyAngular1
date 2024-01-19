import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  //carrito de compra
  private myShopingCart: Product[]=[];

  constructor() { }

  addProduct(paramProduct: Product){
    this.myShopingCart.push(paramProduct);
  }
  getTotal(){
    return this.myShopingCart.reduce((sum, item)=> sum + item.price,0);
  }
  getShopingCart(){
    return this.myShopingCart;
  }
}
