import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarModule } from 'src/app/snackbar/snackbar.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SnackbarModule, BrowserModule],
  declarations: [UpdateProductComponent],
})
export class UpdateProductModule {}
