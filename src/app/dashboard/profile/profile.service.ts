import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile = new BehaviorSubject<{ email: string; password: string }>({
    email: '',
    password: '',
  });
}
