import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { Res } from 'src/app/login/auth.service';
import { Product } from './add-product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:3000/products';
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
          console.log(err);

          throw {
            msg: err.message,
            isError: true,
          };
        })
      );
  }

  getHeader(): Product {
    return {
      brand: 'Nazwa',
      model: '',
      price: 'Cena [zł]',
      category: 'Kategoria',
      subcategory: 'Podkategoria',
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
    const newURL = `${this.url}/remove/${product.model}`;
    return this.http.delete<string>(newURL);
  }

  updateProduct(product: Product, index: number) {
    const newURL = `${this.url}/update`;

    return this.http.post<{ msg: string }>(newURL, {
      product,
      index,
    });
  }
}
