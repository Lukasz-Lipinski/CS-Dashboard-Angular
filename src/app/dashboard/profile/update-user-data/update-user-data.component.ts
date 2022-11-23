import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../login/auth.service';
import { UpdateUserDataService } from './update-user-data.service';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.css'],
})
export class UpdateUserDataComponent implements OnInit {
  newPassword: string = '';
  currentPassword: string = '';

  constructor(
    private updateUserData: UpdateUserDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  updateData() {
    let token: any;

    this.authService.userData.subscribe({
      next: (data) => {
        token = data.idToken;
      },
    });
    this.updateUserData
      .resetPassword({
        idToken: token,
        password: this.newPassword,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });
    console.log('works');
  }
}
