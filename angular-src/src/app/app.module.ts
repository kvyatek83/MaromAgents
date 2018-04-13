import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { MensPerfumePageComponent } from './product-pages/mens-perfume-page/mens-perfume-page.component';
import { LadiesPerfumePageComponent } from './product-pages/ladies-perfume-page/ladies-perfume-page.component';
import { MakeupPageComponent } from './product-pages/makeup-page/makeup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { StockPageComponent } from './product-pages/stock-page/stock-page.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { StockPageComponent } from './stock-page/stock-page.component';

import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    CreateProductComponent,
    MensPerfumePageComponent,
    LadiesPerfumePageComponent,
    MakeupPageComponent,
    HomePageComponent,
    ProductsListComponent,
    StockPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
