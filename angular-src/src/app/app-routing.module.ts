import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateProductComponent } from './create-product/create-product.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { StockPageComponent } from './stock-page/stock-page.component';

// const routes: Routes = [
//   { path: 'catalog/:product', component: CatalogPageComponent},
//   { path: 'mperfume', component: MensPerfumePageComponent},
//   { path: 'lperfume', component: LadiesPerfumePageComponent},
//   { path: 'makeup', component: MakeupPageComponent},
//   { path: 'login', component: LoginPageComponent},
//   { path: 'manager', component: AdminPageComponent},
//   { path: '', redirectTo: 'catalog', pathMatch: 'full' },
//   { path: '**', redirectTo: 'catalog' },
// ];

const routes: Routes = [
    { path: 'create', component: CreateProductComponent},
    { path: 'stock', component: StockPageComponent},
    { path: 'login', component: LoginPageComponent}
];


const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
