import { Injectable } from '@angular/core';

export interface Link {
  label: string;
  href: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  upperMenuLinks: Link[] = [
    { label: 'Strona główna', href: '/dashboard', icon: 'home' },
    { label: 'Profil', href: 'profile', icon: 'face2' },
  ];
  sideMenuLinks: Link[] = [
    { label: 'Dodaj produkt', href: 'add' },
    { label: 'Usuń produkt', href: 'remove' },
    { label: 'Zmodyfikuj produkt', href: 'update' },
  ];

  constructor() {}
}
