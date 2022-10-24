import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Product, Category } from '../add-product/add-product.component';
import { ProductService } from '../add-product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  product!: Product;
  form!: FormGroup;
  categories: Category[] = [
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
  subcategoryIndex!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        const { product } = data;
        this.product = product;
      },
    });
    const { brand, category, description, model, price, subcategory } =
      this.product;

    this.form = this.fb.group({
      brand: this.fb.control(brand, [Validators.required]),
      model: this.fb.control(model, [Validators.required]),
      price: this.fb.control(+price, [Validators.min(0), Validators.required]),
      category: this.fb.control(category, [Validators.required]),
      subcategory: this.fb.control(subcategory, [Validators.required]),
      description: this.fb.control(description, [
        Validators.required,
        Validators.maxLength(300),
      ]),
    });

    this.setSubcategories(
      this.categories.findIndex((el) => el.name === category)
    );
  }

  setSubcategories(i: number) {
    this.subcategoryIndex = i;
  }

  get getSubcategories() {
    return this.categories[this.subcategoryIndex].subcategories;
  }
}
