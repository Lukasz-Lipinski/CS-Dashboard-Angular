import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UpdateUserDataComponent } from './update-user-data/update-user-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProfileComponent, UserDataComponent, UpdateUserDataComponent],
})
export class ProfileModule {}
