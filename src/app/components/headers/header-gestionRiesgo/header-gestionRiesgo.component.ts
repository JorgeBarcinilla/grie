import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-gestionRiesgo',
  templateUrl: './header-gestionRiesgo.component.html',
  styleUrls: ['./header-gestionRiesgo.component.css']
})
export class HeaderGestionRiesgoComponent implements OnInit, OnDestroy {

  title: string;

  constructor(private router : Router) {
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    
  }

  changeTitle(titleButton: string){
    localStorage.setItem('title',titleButton);
    this.title = titleButton;
  }

}
