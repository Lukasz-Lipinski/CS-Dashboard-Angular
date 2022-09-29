import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [LoginModule, BrowserModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
