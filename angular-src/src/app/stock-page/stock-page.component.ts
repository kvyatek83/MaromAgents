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
    this.getAvailableProducts("זמין");
  }

  getAvailableProducts(status){
    this.productsService.getProductsByStatus(status).subscribe(
      data => {this.stock = data},
      err => console.error(err));
  }
}
