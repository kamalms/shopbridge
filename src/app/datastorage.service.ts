import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ProductService } from './product.service';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private commonService: ProductService) {}

  getProducts() {
    const recipes = this.commonService.getProducts();
    this.http
      .get(
        'http://localhost:3000/products', 
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchProducts() {
    return this.http
      .get<Product[]>(
        'http://localhost:3000/products'
      )
      .pipe(
        map(products => {
          return products.map(product => {
            return {
              ...product,
             
            };
          });
        }),
        tap(products => {
          this.commonService.setProducts(products);
        })
      )
  }
}
