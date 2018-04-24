import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product : any;
  update = "update";

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => {this.productsService.getProductsById(params.productId).subscribe(
        data => {this.product = data;},
        err => console.error(err))}
    );
  }

  ngOnInit() {
  }

}
