import { Component, OnInit } from '@angular/core';
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

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
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
