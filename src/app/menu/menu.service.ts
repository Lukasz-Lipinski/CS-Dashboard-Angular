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
    { label: 'Strona główna', href: 'dashboard', icon: 'home' },
    { label: 'Profil', href: 'profile', icon: 'face' },
  ];
  sideMenuLinks: Link[] = [
    { label: 'Dodaj produkt', href: 'add', icon: 'library_add' },
    { label: 'Usuń produkt', href: 'remove', icon: 'delete_forever' },
  ];

  constructor() {}
}
