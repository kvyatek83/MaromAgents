import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {

  stock : any;
  pageType : string;
   
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.pageType = "stock";    
    this.getNotAvailableProducts();
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(
      data => {this.stock = data},
      err => console.error(err));
  }
  
  getNotAvailableProducts(){
    this.productsService.getProductsByStatus("לא זמין").subscribe(
      data => {this.stock = data},
      err => console.error(err));
  }

  getAvailableProducts(){
    this.productsService.getProductsByStatus("זמין").subscribe(
      data => {this.stock = data},
      err => console.error(err));
  }
}
