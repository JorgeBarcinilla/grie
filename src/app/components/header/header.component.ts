import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuItem
} from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [{
        label: 'Politica de administracion de riesgos',
        icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{
                label: 'Lineamientos de la politica',
                routerLink: ['/lineamientosPolitica']
              }]
            }
          ]
        ]
      },
      {
        label: 'Identificacion del riesgo',
        icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [{
              items: [{
                label: 'Caracterizacion del contexto',
                routerLink: ['/caracterizacionContexto']
              }, {
                label: 'Identificaacion del  riesgo',
                routerLink: ['/identificacionRiesgo']
              }]
            }

          ]
        ]
      },
      {
        label: 'Valoracion de riesgos',
        icon: 'fa fa-fw fa-child',
        items: [
          [{
              items: [{
                label: 'Analisis de riesgos',
                routerLink: ['/analisisRiesgo']
              }, {
                label: 'Evaluacion de riesgos',
                routerLink: ['/evaluacionRiesgos']
              }, {
                label: 'Reporte del plaan de tratamiento de riesgos',
                routerLink: ['/reporteTratamientoRiesgo']
              }]
            }
          ]
        ]
      },
      {
        label: 'Preparacion para la respuesta a emergencias',
        icon: 'fa fa-fw fa-gears',
        items: [
          [{
              items: [{
                label: 'Ver seccion',
                routerLink: ['/preparacionRespuestaEmergencia']
              }]
            }
          ]
        ]
      },
      {
        label: 'Ejecucion de la respuesta',
        icon: 'fa fa-fw fa-gears',
        items: [
          [{
              items: [{
                label: 'Ver seccion',
                routerLink: ['/ejecucionRespuesta']
              }]
            }
          ]
        ]
      },
      {
        label: 'Preparación para la recuperación',
        icon: 'fa fa-fw fa-gears',
        items: [
          [{
              items: [{
                label: 'Ver seccion',
                routerLink: ['/preparacionRecuperacion']
              }]
            }
          ]
        ]
      }
    ]
  }
}
