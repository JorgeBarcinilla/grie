import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estimar-riesgo-inicial',
  templateUrl: './estimar-riesgo-inicial.component.html',
  styleUrls: ['./estimar-riesgo-inicial.component.css']
})
export class EstimarRiesgoInicialComponent implements OnInit {

  @Input() formularioEstimarRiesgoInicial : FormGroup; 

  constructor() { }

  ngOnInit() {
  }

}
