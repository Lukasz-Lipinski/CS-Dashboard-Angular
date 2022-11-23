import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveProductComponent } from './remove-product.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product/product.component';
import { SnackbarModule } from 'src/app/snackbar/snackbar.module';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, SnackbarModule],
  declarations: [RemoveProductComponent, ProductComponent],
})
export class RemoveProductModule {}
