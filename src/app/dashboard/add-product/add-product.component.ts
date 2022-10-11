import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';
import { SnackbarDirective } from 'src/app/snackbar/snackbar.directive';
import { AddProductService } from './add-product.service';

interface Label {
  text: string;
  inputType: string;
  inputName: string;
}

interface Category {
  name: string;
  subcategories: Array<string>;
}

export interface Product {
  product: string;
  price: number;
  category: string;
  subcategory: string;
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
  addProductForm!: FormGroup;
  labels: Label[] = [
    { text: 'produkt', inputType: 'text', inputName: 'product' },
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
    private addProductService: AddProductService
  ) {}

  setSubcategory(i: number) {
    this.subcategory = this.categories[i].subcategories;
    this.addProductForm.controls['subcategory'].setValue(this.subcategory[0]);
  }

  ngOnInit(): void {
    this.addProductForm = this.builder.group({
      product: this.builder.control('', [Validators.required]),
      price: this.builder.control(0, [Validators.min(0), Validators.required]),
      category: this.builder.control(this.categories[0].name, [
        Validators.required,
      ]),
      subcategory: this.builder.control(this.subcategory[0], [
        Validators.required,
      ]),
      description: this.builder.control('', [
        Validators.required,
        Validators.maxLength(300),
      ]),
    });
  }

  submit() {
    if (this.addProductForm.valid) {
      const { product, price, category, subcategory, description } =
        this.addProductForm.controls;

      const newProduct: Product = {
        product: product.value,
        price: price.value,
        category: category.value,
        subcategory: subcategory.value,
        description: description.value,
      };

      this.addProductService.addProduct(newProduct).subscribe({
        next: (msg) => {
          this.createSnackbar(msg);
        },
        error: (error) => {
          this.createSnackbar(error);
        },
      });
    }
  }

  createSnackbar({ msg, isError }: { msg: string; isError: boolean }) {
    const viewContainerRef = this.snackbarContainer.viewContainerRef;
    viewContainerRef.clear();

    const snackbar = viewContainerRef.createComponent(SnackbarComponent);

    snackbar.instance.isError = isError;
    snackbar.instance.message = msg;
  }

  create() {
    this.createSnackbar({
      isError: true,
      msg: 'asdf',
    });
  }

  ngOnDestroy() {}
}
