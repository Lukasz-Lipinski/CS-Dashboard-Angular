import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { SnackbarDirective } from './snackbar/snackbar.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
