import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(car:Car,quantity:number){
    var item = CartItems.find(c=>c.car.carId==car.carId);
    if(item){
      item.quantity =Number(quantity)+Number(item.quantity);
      item.price=item.quantity*car.dailyPrice;

    }
    else{
      let cartItem =new CartItem();
      cartItem.car =car;
      cartItem.quantity=quantity;
      cartItem.price=car.dailyPrice*quantity;
      CartItems.push(cartItem)
    }
  }
  list():CartItem[]{
    return CartItems;
  }
  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.carId==car.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }
}
