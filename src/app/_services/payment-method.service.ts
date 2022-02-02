import { payment } from './../_models/payment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  paymentMethod:payment[]=[
    {id:1,name:'visa'},
    {id:2,name:'MasterCard'},
    {id:3,name:'Amircan Express'},
    {id:4,name:'Paypal'},
    {id:5,name:'Cash'},

  ];
  constructor() { }
  getAllPaymentType():payment[]{
    return this.paymentMethod.slice()
  }
}
