import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { Upperletter } from './upperletter.pipe';

@NgModule({
  declarations: [LoginComponent, Upperletter],
  imports: [BrowserModule, ReactiveFormsModule],
})
export class LoginModule {}
