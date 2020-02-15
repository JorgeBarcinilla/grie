import { Component, OnInit, Input } from '@angular/core';
import { MostrarEjemplosService } from 'src/app/helpers/mostrar-ejemplos.service';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.css']
})
export class ButtonExampleComponent implements OnInit {

  @Input() tooltip: string
  @Input() src: string
  @Input() label: string

  constructor(private mostrarEjemplo: MostrarEjemplosService) { }

  ngOnInit() {
    
  }

}
