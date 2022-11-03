import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { SnackbarDirective } from './snackbar.directive';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  message: string | undefined;
  isError: boolean = false;
  timer: any;
  constructor() {}

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  createSnackbar(
    message: string,
    isError: boolean,
    component: SnackbarDirective
  ) {
    let viewContainerRef = component.viewContainerRef;
    viewContainerRef.clear();

    const snackbar =
      viewContainerRef.createComponent<SnackbarComponent>(SnackbarComponent);

    snackbar.instance.isError = isError;
    snackbar.instance.message = message;

    this.timer = setTimeout(() => {
      snackbar.destroy();
    }, 3000);
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
