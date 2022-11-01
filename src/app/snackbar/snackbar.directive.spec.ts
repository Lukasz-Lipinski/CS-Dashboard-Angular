import { TestBed } from '@angular/core/testing';
import { ElementRef } from "@angular/core";
import { SnackbarDirective } from "./snackbar.directive";

describe("Testing Snackbar Directive", () => {
  let directive: SnackbarDirective;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarDirective]
    }).compileComponents();

    directive = TestBed.inject(SnackbarDirective);
  })
  it("Should render correctly", () => {
    expect(directive).toBeDefined();
   })
})