import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceGuard implements CanActivate {
  constructor(private _authService : AuthService,public router: Router) {}
  canActivate(): boolean {

      if (this._authService.validarToken()) {
        return true
      } 
      this.router.navigate(['login']);
      return false;
 }
  
}
