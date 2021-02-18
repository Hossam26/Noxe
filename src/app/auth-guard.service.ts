import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate():boolean|Observable<any>{
    let token=localStorage.getItem("token");
    if (token){
      return true
    }
    this._Router.navigateByUrl("/login")
    return false
  }
  isLogin= new BehaviorSubject(false)
  constructor(private _Router:Router) { }
}
