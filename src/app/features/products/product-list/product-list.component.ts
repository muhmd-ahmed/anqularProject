import { Product } from './../../../_models/product.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { AuthService } from 'src/app/_services/auth/auth.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  Arrayproducts!: Product[] ; 

  @Output()
  itemAddedFromList:EventEmitter<Product>=new EventEmitter<Product>();
  constructor(private productService:ProductService,private authService:AuthService ) {}


  

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
    this.Arrayproducts=res.product;

      },
      (error)=>{
        console.log(error);
        
      },
      ()=>{}


    );
    const user={
      email:'momo200200mm@gmail.com',
    password:'123456789',
    }
    this.authService.login(user).subscribe(
      (res)=>{
    localStorage.setItem('token',res.token)

      }


    );
  }

  // onAddedItem(ev:Product){
  //   console.log(ev)
  //  this.itemAddedFromList.emit(ev);
    
  // }
}
