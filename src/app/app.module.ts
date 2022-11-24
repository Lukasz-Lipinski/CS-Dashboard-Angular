import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { SnackbarModule } from './snackbar/snackbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardModule,
    LoginModule,
    SnackbarModule,
    AppRoutingModule,
  ],
  exports: [SnackbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
