import { By } from '@angular/platform-browser';
import { Product } from './../../add-product/add-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from "./product.component"

describe("Testing ProductComponent", () => {
  let fixture: ComponentFixture<ProductComponent>;
  let component: ProductComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.product = {
      brand: 'product1',
      category: 'product1',
      model: 'product1',
      description: 'product1',
      price: 'product1',
      subcategory: 'product1',
    };
  });

  describe("Class tests", () => {
    it("Should invoke emitter when was clicked", () => {
      const spyObj = spyOn(component.removeEmitter, 'emit')

      component.remove();
      fixture.detectChanges();

      expect(spyObj).toHaveBeenCalledTimes(1);
    });

    it("Should navigate after updating", () => {
      const spyObj = spyOn(component, "update")
      component.update();
      fixture.detectChanges();

      expect(spyObj).toHaveBeenCalledTimes(1);
     });
  });

  describe("Dom tests", () => {
    it("Should render deleting btn", () => {
      expect(component).toBeDefined();
    });

    it('should not render element if isHeader equals true', () => {
      component.isHeader = true;
      const buttons = fixture.debugElement.queryAll(By.css('button'));

      expect(buttons.length).toEqual(0)
    });

    it('should render element if isHeader equals false', () => {
      component.isHeader = false;
      fixture.detectChanges();
      const buttons = fixture.debugElement.queryAll(By.css('button'));

      expect(buttons.length).toBeGreaterThan(0);
      expect(buttons).toBeDefined();
    })
  })

})