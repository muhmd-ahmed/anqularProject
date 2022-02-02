import { tags } from './tags.model';
import { payment } from './payment.model';
import { category } from './category.model';
import { Product_Language } from './product-language.model';
export interface Product {
  _id?: number;
  data:Product_Language[],
  price: number,
  discount?: number,
  imagesUrls: string[],
  count: number,
  category:category,
  paymentType:payment[],
  tags:tags[]
}
