import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarComponent } from '../../snackbar/snackbar.component';
import { SnackbarDirective } from '../../snackbar/snackbar.directive';
import { ProductService } from './product.service';

export interface Label {
  text: string;
  inputType: string;
  inputName: string;
}

export interface Category {
  name: string;
  subcategories: Array<string>;
}

export interface Product {
  brand: string;
  model: string;
  price: number | string;
  category: string;
  subcategory: string;
  specialOffering: boolean;
  description: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @ViewChild(SnackbarDirective, { static: true })
  snackbarContainer!: SnackbarDirective;
  snackbarComponent!: SnackbarComponent;
  addProductForm!: FormGroup;
  labels: Label[] = [
    { text: 'marka', inputType: 'text', inputName: 'brand' },
    { text: 'model', inputType: 'text', inputName: 'model' },
    { text: 'cena', inputType: 'number', inputName: 'price' },
  ];
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
  subcategory: string[] = this.categories[0].subcategories;

  constructor(
    private builder: FormBuilder,
    private addProductService: ProductService
  ) {}

  setSubcategory(i: number) {
    this.subcategory = this.categories[i].subcategories;
    this.addProductForm.controls['subcategory'].setValue(this.subcategory[0]);
  }

  ngOnInit(): void {
    this.addProductForm = this.builder.group({
      brand: this.builder.control('', [Validators.required]),
      model: this.builder.control('', [Validators.required]),
      price: this.builder.control(0, [Validators.min(0), Validators.required]),
      category: this.builder.control(this.categories[0].name, [
        Validators.required,
      ]),
      subcategory: this.builder.control(this.subcategory[0], [
        Validators.required,
      ]),
      specialOffering: this.builder.control(false),
      description: this.builder.control('', [
        Validators.required,
        Validators.maxLength(300),
      ]),
    });

    this.snackbarComponent = new SnackbarComponent();
  }

  submit() {
    if (this.addProductForm.valid) {
      const {
        brand,
        model,
        price,
        category,
        subcategory,
        description,
        specialOffering,
      } = this.addProductForm.controls;

      const newProduct: Product = {
        brand: brand.value,
        model: model.value,
        price: price.value,
        category: category.value,
        subcategory: subcategory.value,
        specialOffering: specialOffering.value,
        description: description.value,
      };

      this.addProductService.addProduct(newProduct).subscribe({
        next: (response) => {
          const { isError, msg } = response;
          this.snackbarComponent.createSnackbar(
            msg,
            isError,
            this.snackbarContainer
          );
        },
        error: (error) => {
          this.snackbarComponent.createSnackbar(
            error.msg,
            error.isError,
            this.snackbarContainer
          );
        },
      });
    }
  }
}
