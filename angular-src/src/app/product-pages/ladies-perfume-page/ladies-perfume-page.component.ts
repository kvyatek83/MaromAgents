import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-ladies-perfume-page',
  templateUrl: './ladies-perfume-page.component.html',
  styleUrls: ['./ladies-perfume-page.component.css']
})
export class LadiesPerfumePageComponent implements OnInit {

  ladies : any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getAllLadiesPerfumeProducts();
  }

  getAllLadiesPerfumeProducts(){
    this.productsService.getProductsByCategoryAndGender("בושם", "אישה").subscribe(
      data => {this.ladies = data},
      err => console.error(err));
  }

}