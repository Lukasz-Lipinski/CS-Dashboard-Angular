import { TestBed } from '@angular/core/testing';

import { RemoveProductResolver } from './remove-product.resolver';

describe('RemoveProductResolver', () => {
  let resolver: RemoveProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RemoveProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
