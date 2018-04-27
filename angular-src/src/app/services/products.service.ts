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
    return this.http.get('item');
  }

  //CREATE A NEW PRODUCT
  createProduct(product) {
    let body = JSON.stringify(product);
    return this.http.post('item', body, httpOptions);
  }

  updateProduct(product) {
    let body = JSON.stringify(product);
    return this.http.put('item' + '/' + product._id, body, httpOptions);
  }

  getProductsById(id) {
    return this.http.get('item' + '/' + id);
  }

  getProductsByCategory(category) {
    return this.http.get('item' +'/category/' + category);
  }

  getProductsByStatus(status) {
    return this.http.get('item' + '/status/' + status);
  }

  getProductsByCategoryAndGender(category, gender) {
    return this.http.get('item' + '/category/' + category+ '/gender/' + gender);
  }

  getProductsByCategoryAndGenderAndStatus(category, gender, status) {
    return this.http.get('item' + '/category/' + category + '/gender/' + gender + '/status/' + status);
  }

  deleteProduct(product) {
    return this.http.delete('item' + '/' + product._id);
  }

}
