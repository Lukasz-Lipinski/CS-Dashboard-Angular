import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { Product } from './add-product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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

  getHeader(): Product {
    return {
      brand: 'Nazwa',
      model: '',
      category: 'Kategoria',
      subcategory: 'Podkategoria',
      price: 'Cena [zł]',
      description: '',
    };
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<{ products: Array<Product> }>(this.url).pipe(
      map((val) => {
        return val.products;
      })
    );
  }

  removeProduct(product: Product): Observable<string> {
    const newURL = `${this.url}remove/${product.model}`;
    return this.http.delete<string>(newURL);
  }
}
