import { Component, Input, OnInit } from '@angular/core';

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

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
