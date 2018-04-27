import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-mens-perfume-page',
  templateUrl: './mens-perfume-page.component.html',
  styleUrls: ['./mens-perfume-page.component.css']
})
export class MensPerfumePageComponent implements OnInit {
  
  mens : any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getAllMensPerfumeProducts();
  }

  getAllMensPerfumeProducts(){
    this.productsService.getProductsByCategoryAndGenderAndStatus("בושם", "גבר", "זמין").subscribe(
      data => {this.mens = data},
      err => console.error(err));
  }
}
