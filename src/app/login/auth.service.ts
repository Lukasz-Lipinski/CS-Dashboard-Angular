import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Request {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface Response {
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
  logged = new BehaviorSubject<boolean>(false);
  registerURL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE';
  signinURL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE';

  constructor(private http: HttpClient) {}

  signin(data: { email: string; password: string }): Observable<Response> {
    const body: Request = {
      ...data,
      returnSecureToken: true,
    };

    return this.http.post<Response>(this.signinURL, body);
  }

  register(data: { email: string; password: string }): Observable<Response> {
    const body: Request = {
      ...data,
      returnSecureToken: true,
    };

    return this.http.post<Response>(this.registerURL, body);
  }

  signout() {
    this.logged.next(false);
  }
}
