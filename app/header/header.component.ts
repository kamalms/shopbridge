import { ProductService } from 'src/app/product.service';
import { AlertService } from './../alert-msg/alert.service';
import { DataStorageService } from './../datastorage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertMsg } from '../app.constant';
import { Product } from '../product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
    private router: Router,
    private alertService: AlertService,
    private commonService: ProductService
    ) { }

  ngOnInit() {
  }

  onSaveData() {
    // console.log('on start of http call')
   // this.dataStorageService.getProducts();
  }

  onFetchData() {
    this.dataStorageService.fetchProducts().subscribe((items) =>{
      // console.log(items);
     // this.router.navigate('products-list')
      this.router.navigate(['products-list']);
      this.alertService.setText(AlertMsg.getAllProducts);
    },

    error =>{
      
      // server hitting got failure so handling local json for demo purpose

      if(error.error) {
       this.alertService.setText(AlertMsg.ApiError, true);
       this.commonService.setProducts(this.CreateLocalProducts());
       this.router.navigate(['products-list']);
      }
    }
    
    );
  }
  
  CreateLocalProducts(){
     return  [
      new Product(
        'iPhone X',
        45000,
        'Product one Description , it is new product to Mobile Categories',
        12,
        'Mobiles'
      ),
      new Product(
        'Samsung Galaxy',
        60000,
        'One of the Galaxy model from Samsumg World. Best Mobile in Android platform.',
        20,
        'Mobiles'
      ),
      new Product(
        'Nokia 139 cm TV',
        41999,
        'Bring home this TV from Nokia and deep-dive into a world of lifelike colours. Boasting a sleek and stunning design, this TV features Micro Dimming and a MaxBrite Display to ensure that you enjoy clear and crisp detail with vibrant colours',
        10,
        'Televisions'
      )
    ];
  }
}
