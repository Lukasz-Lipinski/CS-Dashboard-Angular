import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { SnackbarModule } from './snackbar/snackbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardModule, LoginModule, SnackbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
