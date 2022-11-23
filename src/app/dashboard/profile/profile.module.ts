import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { UpdateUserDataComponent } from './update-user-data/update-user-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule],
  declarations: [ProfileComponent, UpdateUserDataComponent, UserDataComponent],
})
export class ProfileModule {}
