import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from './add-product.component';
import { HttpClient } from '@angular/common/http';

describe('Testing Product Service', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const allProducts: Product[] = [
    {
      brand: 'test',
      category: 'test',
      description: 'test',
      model: 'test',
      price: 3,
      subcategory: 'test',
    },
    {
      brand: 'test2',
      category: 'test2',
      description: 'test2',
      model: 'test2',
      price: 4,
      subcategory: 'test2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should return allProducts', (done: DoneFn) => {
    const url = '/data-get';
    httpClient.get<Product[]>(url).subscribe({
      next: (data) => {
        expect(data.length).toEqual(allProducts.length);
        done();
      },
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');
    req.flush(allProducts);
  });

  it('Should addProduct and return successful respond', (done: DoneFn) => {
    const url = '/data-post';
    const response = {
      msg: 'Successfull',
      isError: false,
    };
    const newProduct = allProducts[0];

    httpClient
      .post<{ msg: string; isError: boolean }>(url, newProduct)
      .subscribe({
        next: (res) => {
          expect(res.msg).toBe(response.msg);
          expect(res.isError).toEqual(response.isError);
          expect(res.isError).toBeFalse();
          done();
        },
      });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');
    req.flush(response);
  });
});
