import { AlertService } from './../alert-msg/alert.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlertMsg } from '../app.constant';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  id: number;
  editMode = false;
  productForm: FormGroup;

  categories = ['Computer Accessories', 'Clothing', 'Mobiles', 'Others']
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {


    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // console.log(this.id, this.editMode)
      this.initForm();
    });
  }

  onSubmit() {

    // console.log(this.productForm.value)
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
      this.alertService.setText(AlertMsg.ItemUpdated);
    } else {
      this.productService.addProduct(this.productForm.value);
      this.alertService.setText(AlertMsg.Newitemadded);
    }
    this.onCancel();
  }




  onCancel() {
    this.router.navigate(['products-list']);
  }

  private initForm() {
    let pName = '';
    let recipeImagePath = '';
    let productDescription = '';
    let recipeIngredients = new FormArray([]);
    let productPrice;
    let pstocks;
    let pcategory = '';

    if (this.editMode) {
      const product = this.productService.getRecipe(this.id);
      pName = product.pname;
      productDescription = product.description;
      productPrice = product.price;
      pstocks = product.stocks;
      pcategory = product.category;

    }

    this.productForm = new FormGroup({
      pname: new FormControl(pName, [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)]),
      description: new FormControl(productDescription, Validators.required),
      price: new FormControl(productPrice, [Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)]),
      stocks: new FormControl(pstocks, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      category: new FormControl(pcategory)
    });
  }

}
