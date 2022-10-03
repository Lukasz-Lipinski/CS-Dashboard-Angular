import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './dashboard/add-product/add-product.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashborad.guard';
import { TileComponent } from './dashboard/home/tile/tile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RemoveProductComponent } from './dashboard/remove-product/remove-product.component';
import { UpdateProductComponent } from './dashboard/update-product/update-product.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [DashboardGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'remove', component: RemoveProductComponent },
      { path: 'update', component: UpdateProductComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
