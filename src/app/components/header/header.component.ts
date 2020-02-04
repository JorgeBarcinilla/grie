import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuItem
} from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   title: string;

  constructor() {}

  ngOnInit() {
    
  }

  changeTitle(titleButton: string){
    this.title = titleButton;
  }

}
