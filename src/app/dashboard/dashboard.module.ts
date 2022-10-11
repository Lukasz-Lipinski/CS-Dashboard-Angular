import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardGuard } from './dashborad.guard';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProfileModule } from './profile/profile.module';
import { HomeComponent } from './home/home.component';
import { TileComponent } from './home/tile/tile.component';
import { AddProductModule } from './add-product/add-product.module';
import { RemoveProductModule } from './remove-product/remove-product.module';
import { UpdateProductModule } from './update-product/update-product.module';

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    SidebarComponent,
    HomeComponent,
    TileComponent,
  ],
  exports: [AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProfileModule,
    AddProductModule,
    RemoveProductModule,
    UpdateProductModule,
  ],
  providers: [DashboardGuard],
})
export class DashboardModule {}
