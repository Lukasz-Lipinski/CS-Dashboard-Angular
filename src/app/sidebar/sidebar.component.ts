import { Component, OnInit } from '@angular/core';
import { Link, MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarLinks: Link[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.sidebarLinks = this.menuService.sideMenuLinks;
  }
}
