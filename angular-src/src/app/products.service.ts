import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('http://localhost:3000/item');
  }

  

  getProductsById(product) {
    return this.http.get('http://localhost:3000/item/' + product._id);
  }

  getProductsByCategory(category) {
    return this.http.get('http://localhost:3000/item/category/' + category);
  }

  getProductsByStatus(status) {
    return this.http.get('http://localhost:3000/item/status/' + status);
  }

  getProductsByCategoryAndGender(category, gender) {
    return this.http.get('http://localhost:3000/item/category/' + category+ '/gender/' + gender);
  }

  deleteProduct(product) {
    return this.http.delete('http://localhost:3000/item/' + product._id);
  }

}
