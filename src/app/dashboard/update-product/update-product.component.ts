import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../add-product/add-product.component';
import { ProductService } from '../add-product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe({
      next: (params: Params) => {
        const { brand, model } = params;

        this.productService.getAllProducts().subscribe({
          next: (products) => {
            this.product = products.filter(
              (el) => el.brand === brand && el.model === model
            )[0];
          },
        });
      },
    });
  }
}
