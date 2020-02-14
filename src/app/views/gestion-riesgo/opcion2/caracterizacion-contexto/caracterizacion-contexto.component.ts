import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-caracterizacion-contexto',
  templateUrl: './caracterizacion-contexto.component.html',
  styleUrls: ['./caracterizacion-contexto.component.css']
})
export class CaracterizacionContextoComponent implements OnInit {

  

    //CONTEXTO EXTERNO
    formularioContextoExterno = new FormGroup({
      contextoPolitico: new FormControl(''),
      contextoEconomicoFinanciero: new FormControl(''),
      contextoTecnologico: new FormControl(''),
      contextoLegalReglamentario: new FormControl(''),
      contextoOtro: new FormControl(''),
      contextoSocialCultural: new FormControl(''),
      contextoAmbiental: new FormControl('')
    });

    //CONTEXTO EXTERNO
    
    formularioContextoInterno = new FormGroup({
      estructuraFisica: new FormControl(''),
      estructuraOrganizacional: new FormControl(''),
      financieros: new FormControl(''),
      comunidadEducativa: new FormControl(''),
      factoresEducativos: new FormControl(''),
      CRAE: new FormControl(''),
      comunicacionInterna: new FormControl('')
    });


  constructor() { }

  ngOnInit() {
  }

  guardarCaracterizacionContexto(){
    console.log(this.formularioContextoInterno.value)
  }

}
