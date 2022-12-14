import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Product } from './add-product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = isDevMode()
    ? 'http://localhost:3000/api/products'
    : `https://cs-angular-deploy-lukasz-lipinski.vercel.app/api/products`;

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
      specialOffering: false,
      description: '',
    };
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<{ products: Array<Product> }>(this.url).pipe(
      map((val) => {
        console.log(val);

        return val.products;
      })
    );
  }

  removeProduct(
    product: Product
  ): Observable<{ msg: string; isError: boolean }> {
    const newURL = `${this.url}/remove/${product.model}`;
    return this.http.delete<{ msg: string; isError: boolean }>(newURL).pipe(
      tap((response) => {
        const { msg, isError } = response;
        return {
          msg: msg,
          isError: isError,
        };
      }),
      catchError((err) => {
        throw {
          msg: err.message,
          isError: true,
        };
      })
    );
  }

  updateProduct(oldProduct: Product, newProduct: Product) {
    const newURL = `${this.url}/update`;

    return this.http
      .post<{ msg: string; isError: boolean }>(newURL, {
        oldProduct,
        newProduct,
      })
      .pipe(
        tap((response) => {
          return {
            msg: response.msg,
            isError: false,
          };
        }),
        catchError((err) => {
          throw {
            msg: err.message,
            isError: true,
          };
        })
      );
  }
}
