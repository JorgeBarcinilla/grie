import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ejecucion-recuperacion",
  templateUrl: "./ejecucion-recuperacion.component.html",
  styleUrls: ["./ejecucion-recuperacion.component.css"]
})
export class EjecucionRecuperacionComponent implements OnInit {
  listaAcciones = [
    {
      necesidad: "UNA NECESIDAD",
      ejecutor: "Jorge LKuis PALACION",
      acciones: "uNA ACCION",
      fechaEjecucion: "12-05-2021",
      seguimiento: {
        respuesta: "",
        accion: ""
      }
    }
  ];
  displayedColumnsAcciones: string[] = [
    "necesidad",
    "ejecutor",
    "acciones",
    "fechaEjecucion",
    "seguimiento"
  ];

  constructor() {}

  ngOnInit() {}
}
