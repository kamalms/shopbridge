import { DataStorageService } from './../datastorage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  subscription: Subscription;
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ];
  term;

  constructor(private productService: ProductService,
    private router: Router,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute) {
    // this.onFetchData();
  }

  ngOnInit() {

    this.subscription = this.productService.productChanged
      .subscribe(
        (products: Product[]) => {
          //  console.log('products', products)
          this.products = products;
        }
      );
    this.products = this.productService.getProducts();
    // console.log('this.products', this.products)
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFetchData() {
    this.dataStorageService.fetchProducts().subscribe((items) => {
      console.log(items)
    });
    // fetchProducts
  }

}
