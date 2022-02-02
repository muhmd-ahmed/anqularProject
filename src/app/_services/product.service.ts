
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './../_models/product.model';
@Injectable({
    providedIn: 'root'
  })
export class ProductService {
    itemAddedToCart:EventEmitter<Product>= new EventEmitter<Product>(); 
    removeItem:EventEmitter<Product>= new EventEmitter<Product>(); 
  constructor(private httpclient:HttpClient ) {}
  productArray: Product[]=[
    {

      _id:1,
      data:[{id:1,name:"Photo Camara",description:"Photo Camara description",language:{id:1,name:"English"}}],
      price:500,
      discount: 50,
      imagesUrls:['https://picsum.photos/200/300'],
      count:1,
      category:{id:1,name:"category 1"},
      tags:[{id:1,name:"tag 1"},{id:2,name:"tag 2"}],
      paymentType:[{id:1,name:"visa"}]
      
    },
    {
      _id:2,
      data:[{id:1,name:"Camara ",description:" Camara description",language:{id:2,name:"English"}}],
      price: 800,
      discount: 50,
      imagesUrls:['https://picsum.photos/500/300'],
      count:1,
      category:{id:2,name:"category 2"},
      tags:[{id:3,name:"tag 3"},{id:4,name:"tag 4"}],
      paymentType:[{id:2,name:"Master Card"}]

    },
    {
      _id:3,
      data:[{id:3,name:"Mobile ",description:" Huawei Mobile Phone",language:{id:3,name:"English"}}],
      price: 9900,
      imagesUrls:['https://picsum.photos/200/500'],
      count:1,
      category:{id:3,name:"category 3"},
      tags:[{id:5,name:"tag 5"},{id:6,name:"tag 6"}],
      paymentType:[{id:3,name:"Paypal"}]
    },
    {
      _id:4,
      data:[{id:4,name:"Car ",description:" Model 2022",language:{id:4,name:"English"}}],
      price: 5000,
      imagesUrls:['https://picsum.photos/300/200'],
      count:1,
      category:{id:4,name:"category 4"},
      tags:[{id:7,name:"tag 7"},{id:8,name:"tag 8"}],
      paymentType:[{id:4,name:"Direct Bank Transfer"}]
    },
    {
      _id:5,
      data:[{id:5,name:"Headphones ",description:"sony company",language:{id:5,name:"English"}}],
      price: 6000,
      discount: 500,
      imagesUrls:['https://picsum.photos/300/400'],
      count:1,
      category:{id:5,name:"category 5"},
      tags:[{id:9,name:"tag 9"},{id:10,name:"tag 10"}],
      paymentType:[{id:5,name:"Visa"}]
    },
    {
      _id:6,
      data:[{id:6,name:"Electrical devices",description:"Fridge unionaire",language:{id:6,name:"English"}}],
      price: 8500,
      imagesUrls:['https://picsum.photos/400/300'],
      count:1,
      category:{id:6,name:"category 6"},
      tags:[{id:11,name:"tag 11"},{id:12,name:"tag 12"}],
      paymentType:[{id:6,name:"Payment Cheque"}]
    },
    {
      _id:7,
      data:[{id:7,name:" Phones",description:"Iphone pro 13",language:{id:7,name:"English"}}],
      price: 15000,
      imagesUrls:['https://picsum.photos/400/200'],
      count:1,
      category:{id:7,name:"category 7"},
      tags:[{id:13,name:"tag 13"},{id:14,name:"tag 14"}],
      paymentType:[{id:7,name:"Payment Cheque"}]
    },
    {
      _id:8,
      data:[{id:8,name:" Phones",description:"Iphone pro 12",language:{id:8,name:"English"}}],
      price: 12000,
      discount: 500,
      imagesUrls:['https://picsum.photos/300/100'],
      count:1,
      category:{id:8,name:"category 8"},
      tags:[{id:15,name:"tag 15"},{id:16,name:"tag 16"}],
      paymentType:[{id:8,name:"Payment Cheque"}]
    },
    {
      _id:9,
      data:[{id:9,name:" Phones",description:"Iphone pro 11",language:{id:9,name:"English"}}],
      price: 10000,
      discount: 500,
      imagesUrls:['https://picsum.photos/500/450'],
      count:1,
      category:{id:9,name:"category 9"},
      tags:[{id:17,name:"tag 17"},{id:18,name:"tag 18"}],
      paymentType:[{id:9,name:"Master Card"}]
    },
  ];
  addToCart:Product[]=[];



  getAllProducts():Observable<{product:Product[],numberOfProducts:number}>{
    const token : string=localStorage.getItem('token')!;
  const headers=new HttpHeaders({
    autoraiztion : token
  })   
    return this.httpclient.get<{product:Product[],numberOfProducts:number}>(`${environment.baseUrl}product`,{headers});
  }
  getProductById(id: string): Observable<Product> {
    return this.httpclient.get<Product>(environment.baseUrl+'product/'+id)
    // return this.productArray.find((item) => item._id === id);
  }

  addProduct(product: Product): void {
    this.productArray.push(product);
  }
  addDeleteProductById(id: number): Product[] {
    return this.productArray.filter((item) => item._id != id);
  }
  addToCartProduct(product:Product):Product[]{
      this.addToCart.push(product)
      const res=this.addToCart
      return res;
  }
  getAllProductsFromCart(): Product[] {
    return this.addToCart.slice();
  } 
}
