import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Tile {
  icon: string;
  text: string;
  navigation: string;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit, Tile {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() navigation: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate([this.navigation], {
      relativeTo: this.activatedRoute,
    });
  }
}
