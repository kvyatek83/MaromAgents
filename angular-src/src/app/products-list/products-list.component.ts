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

  constructor(private productsService: ProductsService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  isUserIsAdmin(){
    return this.userService.getPremission() == "admin";
  }

  
  show(product){
    
  }
  
  update(product){
    this.router.navigate(['updateProduct', product]);
  }

  delete(product){ 

    this.productsService.deleteProduct(product).subscribe(
      data => {
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
      },
      err => console.error(err));
      
  }
}

// window.location.reload()