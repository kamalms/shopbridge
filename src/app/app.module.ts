import { DataStorageService } from './datastorage.service';
import { FilterPipe } from './filter.pipe';
import { AlertService } from './alert-msg/alert.service';
import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductsHomeComponent,
    AlertMsgComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [ProductService, AlertService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
