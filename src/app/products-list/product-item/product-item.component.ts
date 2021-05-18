import { AlertService } from './../../alert-msg/alert.service';
import { Product } from './../../product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { AlertMsg } from 'src/app/app.constant';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router) {
}
  ngOnInit() {
  }

  onEditProduct() {
    this.router.navigate(['edit', this.index]);
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteProduct() {
    
    this.productService.deleteProduct(this.index);
    this.alertService.setText(AlertMsg.ItemDeleted);
    this.router.navigate(['/products-list']);
  }
}
