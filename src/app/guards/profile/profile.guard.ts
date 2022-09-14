import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/services/login-register/login-register.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(
    private loginService: LoginRegisterService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.user$.pipe(
      map((user) => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
