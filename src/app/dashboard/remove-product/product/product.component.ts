import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../add-product/add-product.component';

@Component({
  selector: 'app-product[product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() isHeader: boolean = false;
  @Output() removeEmitter = new EventEmitter<Product>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  remove() {
    this.removeEmitter.emit(this.product);
  }

  update() {
    this.router.navigate(['/dashboard/update'], {
      queryParams: {
        brand: this.product.brand,
        model: this.product.model,
      },
    });
  }
}
