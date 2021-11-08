import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService, private acountService: AccountService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

    if(!this.tokenService.loggedIn()){
      this.tokenService.remove();
      this.acountService.changestatus(false)
      this.router.navigateByUrl("/login")
      return false

    }

    return true;
  }
  
}
