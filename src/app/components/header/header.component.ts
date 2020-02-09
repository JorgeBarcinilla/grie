import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  MenuItem
} from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  

   title: string;

  constructor() {
  }

  ngOnInit() {
    this.title = localStorage.getItem('title');
  }

  ngOnDestroy(){
    
  }

  changeTitle(titleButton: string){
    localStorage.setItem('title',titleButton);
    this.title = titleButton;
  }

}
