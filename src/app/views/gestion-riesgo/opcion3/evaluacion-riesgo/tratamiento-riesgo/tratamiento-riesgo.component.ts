import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tratamiento-riesgo',
  templateUrl: './tratamiento-riesgo.component.html',
  styleUrls: ['./tratamiento-riesgo.component.css']
})
export class TratamientoRiesgoComponent implements OnInit {

  @Input() formularioTratamientoRiesgo : FormGroup; 

  constructor() { }

  ngOnInit() {
  }

}
