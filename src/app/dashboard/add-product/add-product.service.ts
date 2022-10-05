import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductComponent, Product } from './add-product.component';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  url: string = '';
  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<> {
    return this.http.post<>(this.url);
  }
}
