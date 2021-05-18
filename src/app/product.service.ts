import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  productChanged = new Subject<Product[]>();

  private products: Product[] = [];

  constructor() {
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getRecipe(index: number) {
    return this.products[index];
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productChanged.next(this.products.slice());
  }

  updateProduct(index: number, newRecipe: Product) {
    this.products[index] = newRecipe;
    this.productChanged.next(this.products.slice());
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productChanged.next(this.products.slice());
  }
}
