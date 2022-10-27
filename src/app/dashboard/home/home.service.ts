import { Injectable } from '@angular/core';
import { Tile } from './tile/tile.component';
import { Observable, of } from 'rxjs';

@Injectable()
export class HomeService {
  tiles: Tile[] = [
    { icon: 'person', navigation: 'profile', text: 'profile' },
    { icon: 'add', navigation: 'add', text: 'add new product' },
    { icon: 'delete_forever', navigation: 'remove', text: 'remove product' },
  ];

  constructor() {}

  getTiles(): Observable<Tile[]> {
    return of(this.tiles);
  }
}
