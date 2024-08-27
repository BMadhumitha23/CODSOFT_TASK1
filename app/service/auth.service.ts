import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return !!localStorage.getItem('authToken'); // Example logic, replace with your own
  }

  // Check if the user has signed up
  isUserSignedUp(): boolean {
    return !!localStorage.getItem('userSignedUp'); // Example logic, replace with your own
  }
}
