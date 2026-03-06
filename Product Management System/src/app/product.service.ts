import { Injectable } from '@angular/core';
import { Product } from './app.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}