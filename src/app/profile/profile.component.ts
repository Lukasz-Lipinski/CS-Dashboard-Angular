import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  email!: string;
  password!: string;
  isHidden: boolean = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.profileData.subscribe({
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
