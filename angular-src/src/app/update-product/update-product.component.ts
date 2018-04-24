import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product : any;
  update = "update";

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => this.product = params
    );
  }

  ngOnInit() {
  }

}
