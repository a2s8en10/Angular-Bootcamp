import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { id: 1, email: 'admin@gmail.com', password: 'admin123', role: 'admin' },
    {
      id: 2,
      email: 'manager@gmail.com',
      password: 'manager123',
      role: 'manager',
    },
    { id: 3, email: 'user@gmail.com', password: 'user123', role: 'user' },
  ];

  private currentUser: User | null = null;
  private route = inject(Router);
  constructor() {}

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      this.currentUser = user;
      localStorage.setItem('Current User', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('Current User');
    this.route.navigateByUrl('/login');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userData = localStorage.getItem('Current User');
      if (userData) {
        this.currentUser = JSON.parse(userData) as User;
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    // return !!this.getCurrentUser();
     const val = this.getCurrentUser() !== null ? true : false;
     console.log("isAuthenticated is : ",val);

     return val;
  }

  hasRole(role: 'manager' | 'admin' | 'user'): boolean {
    return this.getCurrentUser()?.role === role;
  }
  navigateUrl(Url: string): void {
    this.route.navigateByUrl(Url, { replaceUrl: true });
  }
}
