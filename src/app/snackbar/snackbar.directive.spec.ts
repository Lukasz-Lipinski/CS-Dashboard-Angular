import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SnackbarDirective } from "./snackbar.directive";

describe("Testing Snackbar Directive", () => {
  let directive: SnackbarDirective;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarDirective],
      providers: [
        SnackbarDirective,
        {provide: ViewContainerRef}
      ]
    }).compileComponents();

    directive = TestBed.inject(SnackbarDirective);
  })
  it("Should render correctly", () => {
    expect(directive).toBeDefined();
   })

   it("Should initiate ViewContainerRef", () => {
    expect(directive.viewContainerRef).toBeDefined();
    })
})