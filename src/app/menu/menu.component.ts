import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Response } from '../login/auth.service';
import { Link, MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  upperMenuLinks: Link[] = [];

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.upperMenuLinks = this.menuService.upperMenuLinks;
  }

  logout() {
    const profileData: Response = {
      email: '',
      ExpiresIn: '',
      idToken: '',
      localId: '',
      refreshToken: '',
      registered: false,
    };

    this.authService.signout(profileData);
    this.router.navigate(['/']);
  }
}
