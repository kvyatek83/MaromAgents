import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductsService {

  private productURL = 'http://localhost:3000/item';
  
  constructor(private http: HttpClient) { }
  
  //GET ALL THE PRODUCTS
  getAllProducts() {
    return this.http.get(this.productURL);
  }

  //CREATE A NEW PRODUCT
  createProduct(product) {
    let body = JSON.stringify(product);
    return this.http.post(this.productURL, body, httpOptions);
  }

  updateProduct(product) {
    let body = JSON.stringify(product);
    return this.http.put(this.productURL + '/' + product._id, body, httpOptions);
  }

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
