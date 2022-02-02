import { Product } from './_models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-project';
  addedProducts: Product[] = [];

  // onItemAdded(event: Product)
  //  {
  //   let isProductExist = false;

  //   for (let i in this.addedProducts) {
  //     if (this.addedProducts[i].name === event.name) {
  //       this.addedProducts[i].count++;
  //       isProductExist = true;
  //       break;
  //     }
  //   }

  //   if (!isProductExist) {
  //     this.addedProducts.push(event);
  //   }
  // }
  // onDeleteProduct(ev:Product){
  //    console.log(ev);
     
  //   this.addedProducts.find((item)=>{
      
  //     if(item.name===ev.name)
      
  //      this.addedProducts.splice(this.addedProducts.indexOf(item))
  //   })

  // }
  
}
