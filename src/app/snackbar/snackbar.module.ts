import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { SnackbarDirective } from './snackbar.directive';

@NgModule({
  declarations: [SnackbarComponent, SnackbarDirective],
  imports: [CommonModule, BrowserModule],
  exports: [SnackbarComponent, SnackbarDirective],
})
export class SnackbarModule {}
