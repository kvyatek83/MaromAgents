import { Component, Input, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { ProductsService } from '../products.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: any;
  @Input() callback: Function;

  constructor(private router: Router, private productsService: ProductsService, private userService: UserService) { }

  ngOnInit() {
  }

  isUserIsAdmin(){
    return this.userService.getPremission() == "admin";
  }

  update(product){
    
  }

  delete(product){
    this.productsService.deleteProduct(product).subscribe(
      data => {this.callback},
      err => console.error(err));
      
  }
}

// window.location.reload()