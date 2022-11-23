import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Tile {
  icon: string;
  text: string;
  navigation: string;
}

@Component({
  selector: 'app-tile[tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  @Input() tile!: Tile;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  navigate() {
    if ('navigation' in this.tile) {
      const { navigation } = this.tile;
      this.router.navigate([navigation], {
        relativeTo: this.activatedRoute,
      });
    }
  }
}
