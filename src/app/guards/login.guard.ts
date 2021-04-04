import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
constructor(private authService:AuthService,
  private toastrService:ToastrService,
  private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //eğer token varsa yani giriş yapılmışsa izin ver
      if(this.authService.isAuthenticated()){
        return true;
      }else{
        this.router.navigate(["login"]) //login sayfasına yönlendir
        this.toastrService.info("Sisteme giriş yapmalısınız.")
        return false
      }
  }
  
}
