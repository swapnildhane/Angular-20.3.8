import { Component, VERSION } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './app.product';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = '';
  price = 0;
  filterPrice = '';

  constructor(public ProductService: ProductService) {}

  addProduct(){
    const product: Product = {
      id : Date.now(),
      name : this.name,
      price : this.price
    };
    this.ProductService.addProduct(product);

    this.name = '';
    this.price = 0;
  }

  deleteProduct(id:number){
    this.ProductService.deleteProduct(id);
  }


}
