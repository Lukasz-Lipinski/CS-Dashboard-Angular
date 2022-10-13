import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductComponent } from './add-product.component';

describe('Testing Add product comopnent', () => {
  let fixture: ComponentFixture<AddProductComponent>;
  let component: AddProductComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
  });

  it('Render correctly', () => {
    expect(component).toBeTruthy();
  });
});
