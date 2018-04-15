import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  private productURL = 'http://localhost:3000/item';
  
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productURL);
  }

  // createProduct(product) {
  //   let nePproduct = JSON.stringify(product);
  //   return this.http.post(this.productURL, product);
  // }

  getProductsById(product) {
    return this.http.get(this.productURL + product._id);
  }

  getProductsByCategory(category) {
    return this.http.get(this.productURL +'/category/' + category);
  }

  getProductsByStatus(status) {
    return this.http.get(this.productURL + '/status/' + status);
  }

  getProductsByCategoryAndGender(category, gender) {
    return this.http.get(this.productURL + '/category/' + category+ '/gender/' + gender);
  }

  deleteProduct(product) {
    return this.http.delete(this.productURL + '/' + product._id);
  }

}
