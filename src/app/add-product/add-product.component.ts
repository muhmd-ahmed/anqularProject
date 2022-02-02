import { Product } from './../_models/product.model';
import { payment } from './../_models/payment.model';
import { category } from './../_models/category.model';
import { CategoryService } from './../_services/category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentMethodService } from '../_services/payment-method.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categories!:category [];
  paumentTypes!:payment[];
  Product ={}as Product;
  constructor(private categoryService:CategoryService,private paymentService:PaymentMethodService,private rourterService:Router ) {}

  ngOnInit(): void {
    this.categories=this.getAllGategories();
    this.paumentTypes=this.getAllPaymentTypes();
    this.Product={
      _id:1,
      data:[{id:1,name:"Photo Camara",description:"Photo Camara description",language:{id:1,name:"English"}}],
      price:500,
      discount: 50,
      imagesUrls:['https://picsum.photos/200/300'],
      count:1,
      category:{id:1,name:"category 1"},
      tags:[{id:1,name:"tag 1"},{id:2,name:"tag 2"}],
      paymentType:[{id:1,name:"visa"}]

    }

  }
  getAllGategories():category []{
    return this.categoryService.getAllGategories();
  }
  getAllPaymentTypes(): payment[]{
    return this.paymentService.getAllPaymentType();
  }
  onFormSubmit(form:any): void{

    console.log(form);
    this.rourterService.navigateByUrl('');
  }

  onCheckedInput(i:number){
   let isExist=false;
   this.paumentTypes.find((ele)=>{
    if(this.paumentTypes[i].id===ele.id)
    {
      isExist=true
    }
   })
   if(!isExist) {
    this.Product.paymentType.splice(i)
   }
   
    this.paumentTypes[i]
    console.log(this.paumentTypes[i]);
     
  }
}
