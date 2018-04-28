import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';

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
    this.productsService.getProductsByCategoryAndGenderAndStatus("בושם", "אישה", "זמין").subscribe(
      data => {this.ladies = data},
      err => console.error(err));
  }
}