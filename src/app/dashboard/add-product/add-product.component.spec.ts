import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SnackbarDirective } from 'src/app/snackbar/snackbar.directive';
import { AddProductComponent } from './add-product.component';
import { ProductService } from './product.service';

describe('Testing AddProduct Component', () => {
  let fixture: ComponentFixture<AddProductComponent>;
  let component: AddProductComponent;
  let fb: FormBuilder;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductService, FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    productService = TestBed.inject(ProductService);
  });

  describe('Class tests', () => {
    it('Should be valid if all controls got set value', () => {
      component.ngOnInit();
      fixture.detectChanges();

      expect(component.addProductForm.valid).toBeFalse();

      for (let key in component.addProductForm.controls) {
        key === 'price'
          ? component.addProductForm.controls[key].setValue(5)
          : component.addProductForm.controls[key].setValue('test');
      }

      expect(component.addProductForm.valid).toBeTrue();
    });
  });

  describe('Dom tests', () => {
    it('Should render labels', () => {
      component.ngOnInit();
      fixture.detectChanges();

      const labelsAmount = component.labels.length;

      const labels = fixture.debugElement.queryAll(
        By.css('label[data-testid="label"]')
      );

      expect(labels.length).toEqual(labelsAmount);
    });
  });
});
