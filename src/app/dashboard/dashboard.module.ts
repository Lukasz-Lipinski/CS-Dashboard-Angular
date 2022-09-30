import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardGuard } from './dashborad.guard';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent, MenuComponent, SidebarComponent],
  exports: [AppRoutingModule],
  imports: [CommonModule, AppRoutingModule, MatIconModule],
  providers: [DashboardGuard],
})
export class DashboardModule {}
