import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() brand: string = '';
  @Input() model: string = '';
  @Input() price: number | string = '';
  @Input() category: string = '';
  @Input() subcategory: string = '';
  @Input() description: string = '';
  @Input() isHeader: boolean = false;
  @Output() removeEmitter = new EventEmitter<Product>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  remove() {
    const product: Product = {
      brand: this.brand,
      description: this.description,
      model: this.model,
      price: +this.price,
      subcategory: this.subcategory,
      category: this.category,
    };
    this.removeEmitter.emit(product);
  }

  update() {
    this.router.navigate(['/dashboard/update'], {
      queryParams: {
        brand: this.brand,
        model: this.model,
      },
    });
  }
}
