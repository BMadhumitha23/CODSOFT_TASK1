import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticatedUser();
    const isSignedUp = this.authService.isUserSignedUp();

    console.log('isAuthenticated:', isAuthenticated);
    console.log('isSignedUp:', isSignedUp);

    if (isAuthenticated && isSignedUp) {
      return true;
    } else if (isAuthenticated && !isSignedUp) {
      this.router.navigate(['/signup']);
      return false;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
