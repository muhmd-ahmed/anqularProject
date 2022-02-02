import { Injectable } from '@angular/core';
import { category } from '../_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:category[]=[
    {name:"category1",id:1},
    {name:"category2",id:2},
    {name:"category3",id:3},
    {name:"category4",id:4},
    {name:"category5",id:5},
    {name:"category6",id:6},
    {name:"category7",id:7},
    {name:"category8",id:8},
    {name:"category9",id:9}

  ]
  constructor() { }

  getAllGategories():category []{
    return this.categories.slice();
  }
}
