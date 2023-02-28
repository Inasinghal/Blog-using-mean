import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { UserDetails, TokenPayload, TokenResponse } from './user.model';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: any;
  configUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {
  }

  loginUser(tokenPayload: TokenPayload): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.configUrl}/login`, tokenPayload).pipe(
      map((response: TokenResponse) => {
        this.saveToken(response.token);
        return response;
      }));
  }

  private saveToken(token: string): void {
    sessionStorage.setItem('token', token);
    this.token = token;
  }

  private getToken(): string | null {
    if (!this.token) {
      this.token = sessionStorage.getItem('token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails | null {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public logout(): void {
    this.token = '';
    window.sessionStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
