import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateProductComponent } from './create-product/create-product.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MensPerfumePageComponent} from "./product-pages/mens-perfume-page/mens-perfume-page.component";
import {LadiesPerfumePageComponent} from "./product-pages/ladies-perfume-page/ladies-perfume-page.component";
import {MakeupPageComponent} from "./product-pages/makeup-page/makeup-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
// import {StockPageComponent} from "./product-pages/stock-page/stock-page.component";
import { StockPageComponent } from './stock-page/stock-page.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'mperfume', component: MensPerfumePageComponent},
  { path: 'lperfume', component: LadiesPerfumePageComponent},
  { path: 'makeup', component: MakeupPageComponent},
  { path: 'stock', component: StockPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'newProduct', component: CreateProductComponent},
  { path: 'updateProduct', component: UpdateProductComponent},
  { path: 'updateProduct/:product', component: UpdateProductComponent},
  // { path: 'manager', component: AdminPageComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
