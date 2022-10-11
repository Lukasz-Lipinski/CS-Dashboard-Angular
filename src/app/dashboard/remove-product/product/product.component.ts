import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: string = '';
  @Input() price: number | string = '';
  @Input() category: string = '';
  @Input() subcategory: string = '';
  @Input() isHeader: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
