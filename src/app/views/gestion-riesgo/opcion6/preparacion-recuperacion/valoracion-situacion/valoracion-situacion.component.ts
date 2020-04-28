import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";

export interface DataElementTwoAnswer {
  informacion: string;
  formGroup: {
    name: string;
    formControls: [string, string];
  };
}

@Component({
  selector: "app-valoracion-situacion",
  templateUrl: "./valoracion-situacion.component.html",
  styleUrls: ["./valoracion-situacion.component.css"]
})
export class ValoracionSituacionComponent implements OnInit {
  ELEMENT_DATA_VALORACION: DataElementTwoAnswer[] = [
    {
      informacion: "Está funcionando la I. E",
      formGroup: {
        name: "valoracion1",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Las instalaciones escolares son seguras",
      formGroup: {
        name: "valoracion2",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Dispone de agua limpia",
      formGroup: {
        name: "valoracion3",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Dispone de equipamiento (pupitres, tableros, etc.)",
      formGroup: {
        name: "valoracion4",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion:
        "Dispone de materiales escolares (cuadernos, textos guía, etc)",
      formGroup: {
        name: "valoracion5",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Dispone de docentes",
      formGroup: {
        name: "valoracion6",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Existen adultos / jóvenes que puedan ejercer como docentes",
      formGroup: {
        name: "valoracion7",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Niños / Niñas están asistiendo a la I. E",
      formGroup: {
        name: "valoracion8",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Niños / Niñas dejan de asistir a la I. E",
      formGroup: {
        name: "valoracion9",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion:
        "Si la I.E no puede ser usada, existen sitios donde se pudieran dar clases",
      formGroup: {
        name: "valoracion10",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion:
        "Estos sitios son suficientes para la cantidad de niños y niñas",
      formGroup: {
        name: "valoracion11",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Estos sitios son accesibles",
      formGroup: {
        name: "valoracion12",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion: "Estos sitios son seguros",
      formGroup: {
        name: "valoracion13",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion:
        "Se brindan mensajes especiales a los niños y niñas sobre salud",
      formGroup: {
        name: "valoracion14",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion:
        "Se brindan mensajes especiales a los niños y niñas sobre peligros potenciales",
      formGroup: {
        name: "valoracion15",
        formControls: ["estado", "detalle"]
      }
    },
    {
      informacion:
        "Se brindan mensajes especiales a los niños y niñas sobre formas de protección",
      formGroup: {
        name: "valoracion16",
        formControls: ["estado", "detalle"]
      }
    }
  ];

  dataSourceValoracion = new MatTableDataSource<DataElementTwoAnswer>(
    this.ELEMENT_DATA_VALORACION
  );
  displayedColumnsValoracion: string[] = ["informacion", "estado", "detalle"];
  formParcialValoracion = new FormGroup({});
  constructor(private _operacionesTabla: OperacionesTablaService) {
    this._operacionesTabla.buildForm(
      this.formParcialValoracion,
      this.ELEMENT_DATA_VALORACION
    );
  }

  ngOnInit() {}
}
