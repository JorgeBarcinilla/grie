import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-vista',
  templateUrl: './info-vista.component.html',
  styleUrls: ['./info-vista.component.css']
})
export class InfoVistaComponent implements OnInit {

  @Input() info : string;

  constructor() { }

  ngOnInit() {
  }

}
