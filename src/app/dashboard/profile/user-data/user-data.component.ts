import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../login/auth.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  email!: string;
  password!: string;
  isHidden: boolean = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.profile.subscribe({
      next: ({ email, password }) => {
        this.email = email;
        this.password = password;
      },
    });
  }

  get getPassword(): string {
    let hiddenPassword: string = '';

    for (let i = 0; i < this.password?.length; ++i) {
      hiddenPassword += '*';
    }

    if (this.isHidden) {
      return hiddenPassword;
    }

    return this.password;
  }

  showPassword() {
    this.isHidden = !this.isHidden;
  }
}
