// External libararys
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Local components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NgbdModalContent } from './components/products-list/products-list.component';
import { MensPerfumePageComponent } from './components/product-pages/mens-perfume-page/mens-perfume-page.component';
import { LadiesPerfumePageComponent } from './components/product-pages/ladies-perfume-page/ladies-perfume-page.component';
import { MakeupPageComponent } from './components/product-pages/makeup-page/makeup-page.component';
import { StockPageComponent } from './components/product-pages/stock-page/stock-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

// Local services
import {AppRoutingModule} from './app-routing.module';
import { ProductsService } from './services/products.service';
import { UserService } from './services/user.service';
import { ProductsFilterPipe } from './shared/products-filter.pipe';

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
    StockPageComponent,
    UpdateProductComponent,
    ProductFormComponent,
    ProductsFilterPipe,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService, UserService],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
