import {Pipe, PipeTransform} from '@angular/core';
import { Product } from './app.product';

@Pipe({
  name :'priceFilter'
})

export class PriceFilterPirce implements PipeTransform {
  transform(products: Product[], minPrice :number) : Product[]{
    if(!products || minPrice == null || minPrice == 0){
      return products;
    }
    return products.filter(p => p.price >= minPrice);
  }
}
