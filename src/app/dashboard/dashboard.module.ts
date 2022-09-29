import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardGuard } from './dashborad.guard';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, MatIconModule],
  exports: [AppRoutingModule],
  declarations: [DashboardComponent, MenuComponent],
  providers: [DashboardGuard],
})
export class DashboardModule {}
