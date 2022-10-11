import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Product } from './add-product.component';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  url: string = 'http://localhost:3000/products/';
  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<{ msg: string; isError: boolean }> {
    return this.http
      .post<{ msg: string; isError: boolean }>(this.url, product)
      .pipe(
        tap((val) => {
          const { msg } = val;
          return {
            msg,
            isError: false,
          };
        }),
        catchError((err) => {
          throw {
            msg: err.error.msg,
            isError: true,
          };
        })
      );
  }
}
