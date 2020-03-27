import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-estimar-riesgo-inicial",
  templateUrl: "./estimar-riesgo-inicial.component.html",
  styleUrls: ["./estimar-riesgo-inicial.component.css"]
})
export class EstimarRiesgoInicialComponent implements OnInit {
  listaRiesgos = [
    { nombre: "Riesgo 1", probabilidad: "Probable", impacto: "Menor" },
    { nombre: "Riesgo 1", probabilidad: "Probable", impacto: "Menor" },
    { nombre: "Riesgo 1", probabilidad: "Probable", impacto: "Menor" },
    { nombre: "Riesgo 1", probabilidad: "Probable", impacto: "Menor" },
    { nombre: "Riesgo 2", probabilidad: "Improbable", impacto: "Mayor" },
    { nombre: "Riesgo 3", probabilidad: "Posible", impacto: "Insignificante" },
    { nombre: "Riesgo 4", probabilidad: "Casi seguro", impacto: "Moderado" },
    { nombre: "Riesgo 5", probabilidad: "Rara vez", impacto: "Catastrofico" },
    { nombre: "Riesgo 5", probabilidad: "Rara vez", impacto: "Catastrofico" },
    { nombre: "Riesgo 5", probabilidad: "Rara vez", impacto: "Catastrofico" }
  ];

  riesgosMapeados = {
    casiseguro: {
      insignificante: [],
      menor: [],
      moderado: [],
      mayor: [],
      catastrofico: []
    },
    probable: {
      insignificante: [],
      menor: [],
      moderado: [],
      mayor: [],
      catastrofico: []
    },
    posible: {
      insignificante: [],
      menor: [],
      moderado: [],
      mayor: [],
      catastrofico: []
    },
    improbable: {
      insignificante: [],
      menor: [],
      moderado: [],
      mayor: [],
      catastrofico: []
    },
    raravez: {
      insignificante: [],
      menor: [],
      moderado: [],
      mayor: [],
      catastrofico: []
    }
  };

  constructor() {
    this.mapearRiesgos();
  }

  ngOnInit() {}

  mapearRiesgos() {
    this.listaRiesgos.forEach(riesgo => {
      const probabilidad = riesgo.probabilidad
        .toLocaleLowerCase()
        .replace(" ", "");
      const impacto = riesgo.impacto.toLocaleLowerCase().replace(" ", "");

      this.riesgosMapeados[probabilidad][impacto].push(riesgo.nombre);
    });
  }
}
