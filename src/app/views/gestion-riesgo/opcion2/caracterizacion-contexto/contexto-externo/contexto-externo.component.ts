import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatCheckboxChange } from "@angular/material";

@Component({
  selector: "app-contexto-externo",
  templateUrl: "./contexto-externo.component.html",
  styleUrls: ["./contexto-externo.component.css"]
})
export class ContextoExternoComponent implements OnInit {
  enableSelectAmbiental: boolean = true;

  @Input() formularioContextoExterno: FormGroup;

  fenomenosAmbientales = [
    {
      categoria: "ATMOSFÉRICOS",
      items: [
        "Huracanes",
        "Vendavales",
        "Heladas",
        "Sequías",
        "Tornados",
        "Incendios forestales"
      ]
    },
    {
      categoria: "HIDROLÓGICOS",
      items: ["Desbordamientos", "Inundaciones", "Avenidas torrenciales"]
    },
    {
      categoria: "GEOLÓGICOS",
      items: ["Sismos", "Vulcanismo", "Movimientos en masa"]
    },
    {
      categoria: "OTROS",
      items: ["Tsunamis", "Lahares"]
    }
  ];

  serviciosPublicos: string[] = [
    "Acueducto y alcantarillado",
    "Linea telefonica e internet",
    "Recolección de residuos solidos",
    "Gas natural",
    "Energía eléctrica",
    "Transportes",
    "Recreación y deporte",
    "Servicios de salud",
    "Estación de policía",
    "Estación de bomberos"
  ];

  constructor() {}

  ngOnInit() {}

  changeAmbiental(value: MatCheckboxChange) {
    if (value.checked) {
      this.enableSelectAmbiental = false;
      this.formularioContextoExterno
        .get("contextoAmbiental")
        .setValue(["Ninguno"]);
    } else {
      this.enableSelectAmbiental = true;
      this.formularioContextoExterno.get("contextoAmbiental").setValue([]);
    }
  }
}
