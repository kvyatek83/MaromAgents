import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductsService {

  private localProductURL = 'http://localhost:8080/item';
  private remoteProductURL = 'item';
  
  constructor(private http: HttpClient) { }
  
  //GET ALL THE PRODUCTS
  getAllProducts() {
    return this.http.get(this.remoteProductURL);
  }

  //CREATE A NEW PRODUCT
  createProduct(product) {
    let body = JSON.stringify(product);
    return this.http.post(this.remoteProductURL, body, httpOptions);
  }

  updateProduct(product) {
    let body = JSON.stringify(product);
    return this.http.put(this.remoteProductURL + '/' + product._id, body, httpOptions);
  }

  getProductsById(id) {
    return this.http.get(this.remoteProductURL + '/' + id);
  }

  getProductsByCategory(category) {
    return this.http.get(this.remoteProductURL +'/category/' + category);
  }

  getProductsByStatus(status) {
    return this.http.get(this.remoteProductURL + '/status/' + status);
  }

  getProductsByCategoryAndGender(category, gender) {
    return this.http.get(this.remoteProductURL + '/category/' + category+ '/gender/' + gender);
  }

  getProductsByCompanyAndType(company, family, status) {
    return this.http.get(this.remoteProductURL + '/company/' + company + '/family/' + family + '/status/' + status);
  }

  getProductsByCategoryAndGenderAndStatus(category, gender, status) {
    return this.http.get(this.remoteProductURL + '/category/' + category + '/gender/' + gender + '/status/' + status);
  }

  deleteProduct(product) {
    return this.http.delete(this.remoteProductURL + '/' + product._id);
  }
}
