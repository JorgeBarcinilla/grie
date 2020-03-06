import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-determinar-probabilidad',
  templateUrl: './determinar-probabilidad.component.html',
  styleUrls: ['./determinar-probabilidad.component.css']
})
export class DeterminarProbabilidadComponent implements OnInit {

  @Input() formularioDeterminarProbabilidad : FormGroup; 

  constructor() { }

  ngOnInit() {
  }

}
