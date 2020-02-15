import { Component, OnInit } from '@angular/core';
import { ImageExampleComponent } from 'src/app/components/utils/image-example/image-example.component';
import { MatDialog } from '@angular/material';
import { MostrarEjemplosService } from 'src/app/helpers/mostrar-ejemplos.service';

@Component({
  selector: 'app-identificacion-riesgo',
  templateUrl: './identificacion-riesgo.component.html',
  styleUrls: ['./identificacion-riesgo.component.css']
})
export class IdentificacionRiesgoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  
}
