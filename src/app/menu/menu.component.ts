import { Component, OnInit } from '@angular/core';
import { Link, MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  upperMenuLinks: Link[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.upperMenuLinks = this.menuService.upperMenuLinks;
  }
}
