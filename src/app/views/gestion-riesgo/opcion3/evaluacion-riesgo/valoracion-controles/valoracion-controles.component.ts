import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valoracion-controles',
  templateUrl: './valoracion-controles.component.html',
  styleUrls: ['./valoracion-controles.component.css']
})
export class ValoracionControlesComponent implements OnInit {

  @Input() formularioValoracionControles : FormGroup; s

  constructor() { }

  ngOnInit() {
  }

}
