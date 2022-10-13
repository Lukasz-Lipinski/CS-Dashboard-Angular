import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../add-product/product.service';

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
  @Output() removeEmitter = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  remove() {
    this.removeEmitter.emit(this.product);
  }

  // deleteItem() {
  //   this.productService.removeProduct(this.product).subscribe({
  //     next: (info) => {
  //       console.log(info);
  //     },
  //   });
  // }
}
