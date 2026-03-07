import { Injectable } from '@angular/core';

export interface User {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;
  private _user: User | null = null;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get currentUser(): User | null {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  }

  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this._user = JSON.parse(savedUser);
      this._isLoggedIn = true;
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'swapnil' && password === 'Sw@pnil123') {
      this._user = { username };
      this._isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(this._user));
      return true;
    }
    return false;
  }

  logout(): void {
    this._isLoggedIn = false;
    this._user = null;
    localStorage.removeItem('user');
  }
}
