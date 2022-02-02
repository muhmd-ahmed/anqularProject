import { Product } from './../../_models/product.model';
import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isopen=false

@Input()
addProductToCart!:Product[];

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    
    // this.addProductToCart=this.productService.addToCart
    this.productService.itemAddedToCart.subscribe(

      (next)=>{
        this.onItemAdded(next)
      },
      (error)=>{"unExpected Error"},
      ()=>{"Product Added Successfully!"}
    );
    this.productService.removeItem.subscribe(
      (next)=>{
        this.onDeleteProduct(next)
      },
      (error)=>{"unExpected Error"},
      ()=>{"Product removed Successfully!"});
  }
  
  onItemAdded(product:Product)
  {
   let isProductExist = false;

   for (let i in this.addProductToCart) {
     if (this.addProductToCart[i].data[0].name === product.data[0].name) {
       this.addProductToCart[i].count++;
       isProductExist = true;
       break;
     }
   }

   if (!isProductExist) {
     this.addProductToCart.push(product);
   }
 }
 onDeleteProduct(ev:Product){
  console.log(ev);
  
 this.addProductToCart.find((item,index)=>{
   
   if(item.data[0].name===ev.data[0].name)
   {
     if(this.addProductToCart.indexOf(item)>=0){
     this.addProductToCart.splice(this.addProductToCart.indexOf(item),1)
   console.log(this.addProductToCart.indexOf(item)) 

     }
   } 
   
  
 })

}

  onDeleteItem(product:Product){
  //  this.addProductToCart.filter((item)=>{ 
  //   this.removeItem.emit(item)
  //   })
  this.productService.removeItem.emit(product)
  
  // this.productService.getAllProductsFromCart()
  }

}
// this.removeItem.emit(this.addProductToCart[0])