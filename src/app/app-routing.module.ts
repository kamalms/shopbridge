import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'products-list', component: ProductsListComponent,
    children:[

      {path:'edit', component: AddProductComponent}
      
    ]
  },
  {path:'edit/:id', component: AddProductComponent},
  {
    path:'add-item', component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
