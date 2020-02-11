import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-caracterizacion-contexto',
  templateUrl: './caracterizacion-contexto.component.html',
  styleUrls: ['./caracterizacion-contexto.component.css']
})
export class CaracterizacionContextoComponent implements OnInit {

  fenomenosAmbientales = [
    {
      categoria:'ATMOSFERICOS',
      items:['Huracanes','Vendavales','Heladas','Sequias','Tornados','Incendios forestales']
    },
    {
      categoria:'HIDROLOGICOS',
      items:['Desbordamientos','Inundaciones','Avenidas torrenciales']
    },
    {
      categoria:'GEOLOGICOS',
      items:['Sismos','Vulcanismo','Movimientos en masa']
    },
    {
      categoria:'OTROS',
      items:['Tsunamis','Lahares']
    }
  ];

  serviciosPublicos : string[] = ['Acueducto y alcantarillado',
    'Linea telefonica e internet',
    'Recoleccion de residuos solidos',
    'Gas natural',
    'Energia electrica',
    'Transportes',
    'Recreacion y deporte',
    'Servicios de salud',
    'Estacion de policia',
    'Estacion de bomberos'];


    formularioContextoExterno = new FormGroup({
      contextoPolitico: new FormControl(''),
      contextoEconomicoFinanciero: new FormControl(''),
      contextoTecnologico: new FormControl(''),
      contextoLegalReglamentario: new FormControl(''),
      contextoOtro: new FormControl(''),
      contextoSocialCultural: new FormControl(''),
      contextoAmbiental: new FormControl('')
    });


  constructor() { }

  ngOnInit() {
  }

  guardarCaracterizacionContexto(){
    console.log(this.formularioContextoExterno.value)
  }

}
