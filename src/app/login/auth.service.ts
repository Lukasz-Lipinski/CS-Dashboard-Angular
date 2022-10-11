import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Req {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface Res {
  idToken: string;
  email: string;
  refreshToken: string;
  ExpiresIn: string;
  localId: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject<Res>({
    email: '',
    ExpiresIn: '',
    idToken: '',
    localId: '',
    refreshToken: '',
    registered: false,
  });

  registerURL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE';
  signinURL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE';

  constructor(private http: HttpClient) {}

  signin(data: { email: string; password: string }): Observable<Res> {
    const body: Req = {
      ...data,
      returnSecureToken: true,
    };

    return this.http.post<Res>(this.signinURL, body);
  }

  register(data: { email: string; password: string }): Observable<Res> {
    const body: Req = {
      ...data,
      returnSecureToken: true,
    };

    return this.http.post<Res>(this.registerURL, body);
  }

  signout(userData: Res) {
    this.userData.next({
      ...userData,
      registered: false,
    });
  }
}
