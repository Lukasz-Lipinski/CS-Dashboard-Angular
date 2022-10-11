import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveProductComponent } from './remove-product.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [RemoveProductComponent],
})
export class RemoveProductModule {}
