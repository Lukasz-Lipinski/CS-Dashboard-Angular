import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardGuard } from './dashborad.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, MenuComponent],
  providers: [DashboardGuard],
})
export class DashboardModule {}
