import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from './add-product.component';
import { HttpClient } from '@angular/common/http';

describe('Testing Product Service', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should return allProducts', (done: DoneFn) => {
    const allProducts: Product[] = [
      {
        brand: 'test',
        category: 'test',
        description: 'test',
        model: 'test',
        price: 3,
        subcategory: 'test',
      },
    ];

    httpClient.get<Product[]>('./').subscribe({
      next: (data) => {
        console.log(data);
        expect(data.length).toEqual(allProducts.length);
        done();
      },
    });

    const req = httpTestingController.expectOne('./');

    expect(req.request.method).toEqual('GET');
    req.flush(allProducts);
  });
});
