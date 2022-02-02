import { Product } from './../../../_models/product.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
@Output()
itemAddedFromContainerList:EventEmitter<Product>= new EventEmitter<Product>(); 
  constructor() { }

  ngOnInit(): void {
  }

  onitemAdded(event:Product){
    this.itemAddedFromContainerList.emit(event);

  }
}
