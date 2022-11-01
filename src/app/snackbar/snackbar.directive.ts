import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSnackbar]'
})
export class SnackbarDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
