import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _globalService : GlobalService,  private router : Router) { }

  validarToken(){
    return !!localStorage.getItem('token')
  }

  signUp(data) {
    this._globalService.getQuery('/user/signUp', 'post', false,data).subscribe( (res:any) => {
      if (res){
          localStorage.setItem('token', res.token);
      }
    })

  }

  signIn(data) {
    this._globalService.getQuery('/user/signIn', 'post', false, data).subscribe( (res:any) => {
      if (res){
          localStorage.setItem('token', res.token);
          this.router.navigate(['home']);
      }
    })

  }

}


