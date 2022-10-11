import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarDirective } from 'src/app/snackbar/snackbar.directive';
import { SnackbarModule } from 'src/app/snackbar/snackbar.module';

@NgModule({
  declarations: [AddProductComponent],
  imports: [CommonModule, ReactiveFormsModule, SnackbarModule],
})
export class AddProductModule {}
