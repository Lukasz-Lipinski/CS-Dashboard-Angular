import { Component, OnInit } from '@angular/core';
import { Tile } from './tile/tile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    { icon: 'person', navigation: 'profile', text: 'profile' },
    { icon: 'add', navigation: 'add', text: 'add new product' },
    { icon: 'delete_forever', navigation: 'remove', text: 'remove product' },
    { icon: 'system_update', navigation: 'update', text: 'update' },
  ];
  constructor() {}

  ngOnInit() {}
}
