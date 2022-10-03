import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Request {
  idToken: string;
  password: string;
  returnSecureToken: boolean;
}

interface Response {
  localId: string;
  email: string;
  passwordHash: string;
  providerUserInfo: object;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}

@Injectable({
  providedIn: 'root',
})
export class UpdateUserDataService {
  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE';

  constructor(private http: HttpClient) {}

  resetPassword(data: {
    password: string;
    idToken: string;
  }): Observable<Response> {
    const body: Request = {
      ...data,
      returnSecureToken: true,
    };
    return this.http.post<Response>(this.url, body);
  }
}
