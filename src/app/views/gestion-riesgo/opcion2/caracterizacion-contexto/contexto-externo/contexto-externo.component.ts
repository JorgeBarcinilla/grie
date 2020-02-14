import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contexto-externo',
  templateUrl: './contexto-externo.component.html',
  styleUrls: ['./contexto-externo.component.css']
})
export class ContextoExternoComponent implements OnInit {

  @Input() formularioContextoExterno : FormGroup; 

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

  constructor() { }

  ngOnInit() {
  }

}
