import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Category, Product } from '../add-product/add-product.component';
import { ProductService } from '../add-product/product.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css'],
})
export class RemoveProductComponent implements OnInit {
  searcher: string = '';
  category: Category[] = [
    {
      name: 'AGD',
      subcategories: [
        'Kuchnia',
        'Sprzątanie',
        'Ekspresy i kawa',
        'Do zabudowy',
      ],
    },
    {
      name: 'RTV',
      subcategories: [
        'Telewizory',
        'Kino Domowe',
        'Odtwarzacz wideo',
        'Car Audio',
      ],
    },
    {
      name: 'Komputery',
      subcategories: [
        'Laptopy',
        'Komputery stajonarne',
        'Tablety',
        'Słuchawki',
      ],
    },
    {
      name: 'Smartfony',
      subcategories: ['Apple', 'Samsung', 'Nokia', 'Motorola', 'Lenovo'],
    },
  ];
  allProducts!: Product[];
  header!: Product;

  get getFoundProducts() {
    if (this.searcher) {
      return this.allProducts.filter((el) => {
        let composedName = this.compseLabel(el);
        return composedName.includes(this.searcher.toLowerCase()) && el;
      });
    } else {
      return this.allProducts;
    }
  }

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.header = this.productService.getHeader();
    this.activatedRoute.data
      .pipe(
        map((data) => {
          const { products } = data;
          return products;
        })
      )
      .subscribe({
        next: (data) => {
          this.allProducts = data;
        },
      });
  }

  removeItem(product: Product) {
    this.productService.removeProduct(product).subscribe({
      next: (info) => {
        console.log(info);
      },
    });

    this.allProducts = this.allProducts.filter(
      (item) => item.model !== product.model
    );
  }

  compseLabel(product: Product): string {
    return `${product.brand} ${product.model}`.toLowerCase();
  }
}
