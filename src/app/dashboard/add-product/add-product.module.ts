import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarDirective } from 'src/app/snackbar/snackbar.directive';

@NgModule({
  declarations: [AddProductComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddProductModule {}
