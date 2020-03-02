import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-caracterizacion-contexto',
  templateUrl: './caracterizacion-contexto.component.html',
  styleUrls: ['./caracterizacion-contexto.component.css']
})
export class CaracterizacionContextoComponent implements OnInit {

    formularioCaracterizacionContexto = new FormGroup({

      //CONTEXTO EXTERNO
    contextoExterno : new FormGroup({
      contextoPolitico: new FormControl(''),
      contextoEconomicoFinanciero: new FormControl(''),
      contextoTecnologico: new FormControl(''),
      contextoLegalReglamentario: new FormControl(''),
      contextoOtro: new FormControl(''),
      contextoSocialCultural: new FormControl(''),
      contextoAmbiental: new FormControl('')
    }),

    //CONTEXTO INTERNO
    
    contextoInterno : new FormGroup({
      estructuraFisica: new FormControl(''),
      estructuraOrganizacional: new FormControl(''),
      financieros: new FormControl(''),
      comunidadEducativa: new FormControl(''),
      factoresEducativos: new FormControl(''),
      CRAE: new FormControl(''),
      comunicacionInterna: new FormControl('')
    }),

    //CONTEXTO DEL PROCESO
    
    contextoProceso : new FormGroup({
      contextosProcesos: new FormControl(''),
    }),

    //CONTEXTO DEL PROCESO
    
    identificacionActivos : new FormGroup({
      activos: new FormControl(''),
    })

    });

    


  constructor() { }

  ngOnInit() {
  }

  guardarCaracterizacionContexto(){
    console.log("Esto es lo que guarda la vista Caracterizacion del contexto")
    console.log(this.formularioCaracterizacionContexto.value)
  }

}
