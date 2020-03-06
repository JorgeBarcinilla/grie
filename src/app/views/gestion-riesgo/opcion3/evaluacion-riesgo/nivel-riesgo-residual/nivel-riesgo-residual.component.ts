import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nivel-riesgo-residual',
  templateUrl: './nivel-riesgo-residual.component.html',
  styleUrls: ['./nivel-riesgo-residual.component.css']
})
export class NivelRiesgoResidualComponent implements OnInit {

  @Input() formularioNivelRiesgoResidual : FormGroup; 

  constructor() { }

  ngOnInit() {
  }

}
