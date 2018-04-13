import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {

  stock : any;
   
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(){
    this.productsService.getAllProducts().subscribe(
      data => {this.stock = data},
      err => console.error(err),
      () => console.log('done'));
  }
}
