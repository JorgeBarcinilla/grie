import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OperacionesTablaService } from 'src/app/helpers/operaciones-tabla.service';

export interface DataElementRiesgosFisicos {
  riesgo: string;
  formGroup:{name: string, formControls:['probabilidad','impacto']}
  //impacto:{name: string, formControls:['impacto']}
}

const ELEMENT_DATA_RIESGOS: DataElementRiesgosFisicos[] = [
  {riesgo: 'Riesgo 1', formGroup: {name: 'riesgo1', formControls:['probabilidad','impacto']}},
  {riesgo: 'Riesgo 2', formGroup: {name: 'riesgo2', formControls:['probabilidad','impacto']}},
  {riesgo: 'Riesgo 3', formGroup: {name: 'riesgo3', formControls:['probabilidad','impacto']}}
];

@Component({
  selector: 'app-determinar-probabilidad',
  templateUrl: './determinar-probabilidad.component.html',
  styleUrls: ['./determinar-probabilidad.component.css']
})
export class DeterminarProbabilidadComponent implements OnInit {

  @Input() formularioDeterminarProbabilidad: FormControl; 

  listaRiesgos = ELEMENT_DATA_RIESGOS;
  displayedColumnsRiesgos: string[] = ['riesgo', 'probabilidad', 'impacto'];

  listaFrecuencia = ['Casi seguro','Probable','Posible','Improbable','Rara vez'];
  listaImpacto = ['Catastrofico','Mayor','Moderado','Menor','Insignificante']

  formParcialDeterminarProbabilidad = new FormGroup({});

  constructor(private _operacionesTabla: OperacionesTablaService) { 
    console.log(this.formParcialDeterminarProbabilidad)
    this._operacionesTabla.buildForm(this.formParcialDeterminarProbabilidad, ELEMENT_DATA_RIESGOS);
    console.log(this.formParcialDeterminarProbabilidad.value)
  }

  ngOnInit() {
  }

  guardarProbabilidad(){
    this.formularioDeterminarProbabilidad.setValue(this.formParcialDeterminarProbabilidad.value);
  }
  

}
