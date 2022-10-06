import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AddProductComponent, Product } from './add-product.component';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  url: string = 'http://localhost:3000/products/';
  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<string> {
    return this.http.post<string>(this.url, product);
  }
}
