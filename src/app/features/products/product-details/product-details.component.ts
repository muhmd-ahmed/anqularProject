import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!:Product;
  otherProducts!:Product[];
  constructor(private activtedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
  
    const id=this.activtedRoute.snapshot.params['productId'];
    this.activtedRoute.params.subscribe(
      (params)=>{
        const id=params['productId'];
        if(id){
          this.getProductById(id);
          this.getAllProducts();
    
        }
      }
      );
   
  }
getProductById(id:string){
  this.productService.getProductById(id).subscribe(
    (res)=>{
      this.product=res;
    }
  )
}
getAllProducts(){
  this.productService.getAllProducts().subscribe(
    (res)=>{
      this.otherProducts=res.product.splice(0,5);
    }
  )
}
onAddItem(){
  this.productService.itemAddedToCart.emit(this.product);
 
 // this.productService.addToCartProduct(this.productItem)
}
}
