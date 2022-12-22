import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalPrice:number=0;
  cartItems:CartItem[]=[];
  constructor(
    private cartService:CartService,
    private toastrService:ToastrService
  ){}

  ngOnInit(): void {

  }
  completedPayment(){

    this.toastrService.success(" Ödeme İşlemi Yapildi!");
  }

}
