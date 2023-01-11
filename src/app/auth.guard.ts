import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private route : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   
if (localStorage.getItem("Tasks1") === null  && localStorage.getItem("Tasks2") === null){

  this.route.navigateByUrl("login");
  return false
  
}
else{

  return true;
  
}
      
  }
  
}
