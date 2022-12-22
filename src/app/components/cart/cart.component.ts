import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice:number=0;
  cartItems:CartItem[]=[];
  constructor(
    private cartService:CartService,
    private toastrService:ToastrService
  ){}

  ngOnInit(): void {
    this.getCart();
    this.calculateTotalPrice();
  }
  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeCart(car:Car){
    this.cartService.removeFromCart(car);
    this.toastrService.error(car.brandName +" "+ car.carName +" Sepetten Silindi!");
    this.totalPrice=Number(this.totalPrice)-Number(car.dailyPrice)
  }
  Payment(car:Car){
    this.cartService.removeFromCart(car);
    this.toastrService.success(car.brandName +" "+ car.carName +" Satın Alındı!");
  }
  calculateTotalPrice(){
    this.cartItems.forEach(cartItem => {
      this.totalPrice=Number(this.totalPrice)+Number(cartItem.price);
    });
  }
}
