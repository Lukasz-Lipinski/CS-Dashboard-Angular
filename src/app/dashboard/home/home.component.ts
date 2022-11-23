import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Tile } from './tile/tile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  tiles!: Observable<Tile[]>;
  
  constructor(private readonly homeService: HomeService) {}

  ngOnInit() {
    this.tiles = this.homeService.getTiles();
  }
}
