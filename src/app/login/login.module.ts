import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, ReactiveFormsModule],
})
export class LoginModule {}
