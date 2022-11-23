import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from '../add-product/product.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductResolver implements Resolve<Observable<any>> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.productService.getAllProducts().pipe(
      map((products) => {
        return products.filter(
          (item) =>
            item.brand === route.queryParams['brand'] &&
            item.model === route.queryParams['model']
        )[0];
      })
    );
  }
}
