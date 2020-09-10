import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';
/** Router redirect */
@Injectable()
export class AuthGuards implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const token = window.localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
