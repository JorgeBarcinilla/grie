import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _fuenteUrl = new BehaviorSubject<string>(null);

  constructor() { 
  }

  enviarUrl(url: string){
    this._fuenteUrl.next(url);
  }

  obtenerUrl(){
    return this._fuenteUrl.asObservable();
  }
}
