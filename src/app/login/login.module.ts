import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { Upperletter } from './upperletter.pipe';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SnackbarDirective } from '../snackbar/snackbar.directive';

@NgModule({
  declarations: [
    LoginComponent,
    Upperletter,
    SnackbarComponent,
    SnackbarDirective,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
})
export class LoginModule {}
