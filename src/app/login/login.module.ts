import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { Upperletter } from './upperletter.pipe';
import { SnackbarModule } from '../snackbar/snackbar.module';

@NgModule({
  declarations: [LoginComponent, Upperletter],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SnackbarModule,
  ],
})
export class LoginModule {}
