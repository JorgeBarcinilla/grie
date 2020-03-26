import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-analisis-riesgo",
  templateUrl: "./analisis-riesgo.component.html",
  styleUrls: ["./analisis-riesgo.component.css"]
})
export class AnalisisRiesgoComponent implements OnInit {
  formularioAnalisisRiesgo = new FormGroup({
    //DETERMINAR PROBABILIDAD
    determinarProbabilidad: new FormControl(""),

    //ESTIMAR RIESGO INICIAL
    estimarRiesgoInicial: new FormGroup({})
  });

  constructor() {}

  ngOnInit() {}

  guardarAnalisisRiesgo() {}
}
