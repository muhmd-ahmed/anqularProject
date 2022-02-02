import { Product } from './../../../_models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
productItem!:Product;

constructor(private productService:ProductService ) { }

  ngOnInit(): void {
  }

  onAddItem(){
     this.productService.itemAddedToCart.emit(this.productItem);
    
    // this.productService.addToCartProduct(this.productItem)
  }
}
