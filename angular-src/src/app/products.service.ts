import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): any {
    return this.http.get('http://localhost:3000/item');
  }


}