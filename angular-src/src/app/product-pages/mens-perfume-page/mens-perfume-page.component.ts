import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../products.service';

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
    this.productsService.getProductsByCategoryAndGender("בושם", "גבר").subscribe(
      data => {this.mens = data},
      err => console.error(err));
  }

}
