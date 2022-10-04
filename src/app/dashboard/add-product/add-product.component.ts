import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Label {
  text: string;
  inputType: string;
}

interface Category {
  name: string;
  subcategories: Array<string>;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  labels: Label[] = [
    { text: 'name', inputType: 'text' },
    { text: 'price', inputType: 'number' },
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

  constructor(private builder: FormBuilder) {}

  setSubcategory(i: number) {
    this.subcategory = this.categories[i].subcategories;
  }

  ngOnInit(): void {
    this.addProductForm = this.builder.group({
      name: this.builder.control('', [Validators.required]),
      price: this.builder.control(0, [Validators.min(0), Validators.required]),
      category: this.builder.control(this.categories[0].name, [
        Validators.required,
      ]),
      description: this.builder.control('', [
        Validators.required,
        Validators.maxLength(300),
      ]),
    });
  }

  submit() {
    console.log(this.addProductForm.value);
  }
}
