import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUsername: string = '';

  constructor() {}

  setLoggedInUsername(username: string) {
    this.loggedInUsername = username;
  }

  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }
}
