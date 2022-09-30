import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Profile {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileData = new BehaviorSubject<Profile>({
    email: '',
    password: 'asdsdf',
  });

  constructor() {}
}
