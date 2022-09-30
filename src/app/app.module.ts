import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { AddProductModule } from './add-product/add-product.module';
import { RemoveProductModule } from './remove-product/remove-product.module';
import { UpdateProductModule } from './update-product/update-product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LoginModule,
    BrowserModule,
    DashboardModule,
    ProfileModule,
    AddProductModule,
    RemoveProductModule,
    UpdateProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
