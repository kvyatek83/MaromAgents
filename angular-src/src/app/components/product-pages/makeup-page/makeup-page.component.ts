import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-makeup-page',
  templateUrl: './makeup-page.component.html',
  styleUrls: ['./makeup-page.component.css']
})
export class MakeupPageComponent implements OnInit {

  makeup : any;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {this.productsService.getProductsByCompanyAndType(params.Company, params.Type, "זמין").subscribe(
        data => {this.makeup = data;},
        err => console.error(err))}
    );
   }

  ngOnInit() {
    //this.getAllLadiesPerfumeProducts();
  }

  getAllLadiesPerfumeProducts(){
    this.productsService.getProductsByCategoryAndGenderAndStatus("איפור", "אישה", "זמין").subscribe(
      data => {this.makeup = data},
      err => console.error(err));
  }

}
