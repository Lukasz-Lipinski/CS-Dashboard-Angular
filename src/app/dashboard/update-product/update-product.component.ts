import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Res } from 'src/app/login/auth.service';

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
  private subcategories!: string[];
  productIndex!: number;
  subcategoryIndex!: number;
  response!: Observable<Res>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        const { product } = data;
        this.product = product;
      },
    });

    this.activatedRoute.queryParams.subscribe({
      next: (params: Params) => {
        this.productIndex = params['index'];
      },
    });

    const { brand, category, description, model, price, subcategory } =
      this.product;

    this.form = this.fb.nonNullable.group({
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

  get getSubcategories() {
    return this.subcategories;
  }

  setSubcategories(i: number) {
    this.subcategories = this.categories[i].subcategories;
  }

  updateData() {
    const { brand, category, description, model, price, subcategory } =
      this.form.controls;

    const newProduct: Product = {
      brand: brand.value,
      model: model.value,
      price: price.value,
      category: category.value,
      subcategory: subcategory.value,
      description: description.value,
    };

    this.productService.updateProduct(newProduct, this.productIndex).subscribe({
      next: (response) => {
        console.log(response.msg);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
