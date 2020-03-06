import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-evaluacion-riesgo',
  templateUrl: './evaluacion-riesgo.component.html',
  styleUrls: ['./evaluacion-riesgo.component.css']
})
export class EvaluacionRiesgoComponent implements OnInit {

  formularioEvaluacionRiesgo = new FormGroup({

    //NIVEL DEL RIESGO RESIDUAL
    nivelRiesgoResidual : new FormGroup({
      xxxx: new FormControl(''),
    }),

    //TRATAMIENTO DEL RIESGO
    tratamientoRiesgo : new FormGroup({
      
    }),

    //VALORACION DE CONTROLES
    valoracionControles : new FormGroup({
      
    }),

  });

  constructor() { }

  ngOnInit() {
  }

}
