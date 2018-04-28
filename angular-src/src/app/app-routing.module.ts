import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateProductComponent } from './components/create-product/create-product.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {MensPerfumePageComponent} from "./components/product-pages/mens-perfume-page/mens-perfume-page.component";
import {LadiesPerfumePageComponent} from "./components/product-pages/ladies-perfume-page/ladies-perfume-page.component";
import {MakeupPageComponent} from "./components/product-pages/makeup-page/makeup-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {StockPageComponent} from "./components/product-pages/stock-page/stock-page.component";
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'mperfume', component: MensPerfumePageComponent},
  { path: 'lperfume', component: LadiesPerfumePageComponent},
  { path: 'makeup', component: MakeupPageComponent},
  { path: 'stock', component: StockPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'newProduct', component: CreateProductComponent},
  { path: 'updateProduct', component: UpdateProductComponent},
  { path: 'updateProduct/:productId', component: UpdateProductComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
