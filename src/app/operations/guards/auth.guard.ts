import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = !isNull(localStorage.getItem('userToken'));

    if (!isLoggedIn) {
      alert('Vous n\'êtes pas connecté');
      document.location.href = 'http://localhost:4200/';
    }
    return isLoggedIn;

  }
}
