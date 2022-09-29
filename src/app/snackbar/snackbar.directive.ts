import { Directive, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appSnackbar]',
})
export class SnackbarDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
