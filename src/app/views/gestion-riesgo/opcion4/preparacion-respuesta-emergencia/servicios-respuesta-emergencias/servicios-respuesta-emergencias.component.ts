import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";

export interface DataElementTwoAnswer {
  organizacion: string;
  funciones: string;
  formGroup: { name: string; formControls: [String, string] };
}

@Component({
  selector: "app-servicios-respuesta-emergencias",
  templateUrl: "./servicios-respuesta-emergencias.component.html",
  styleUrls: ["./servicios-respuesta-emergencias.component.css"]
})
export class ServiciosRespuestaEmergenciasComponent implements OnInit {
  ELEMENT_DATA_SERVICIOS_RESPUESTA_EMERGENCIAS: DataElementTwoAnswer[] = [
    {
      organizacion: "Coordinador de la respuesta escolar a emergencias",
      funciones:
        "Obtener y analizar información sobre el evento.Informar a sus brigadas las condiciones del evento.Activar la respuesta a emergencias.Coordinar y optimizar los recursos humanos y técnicos para atender la emergencia.Servir de conexión con entidades operativas.Informar a la comunidad educativa sobre el estado de la emergencia.Apoyar al rector(a) en la toma de decisiones.Consolidar los reportes de las brigadas de la escuela.",
      formGroup: {
        name: "row1",
        formControls: ["nombreResponsables", "suplentes"]
      }
    },
    {
      organizacion: "Brigadas de evacuación",
      funciones:
        "Planear y ejecutar simulacros de evacuación por cursos y general. Llevar a cabo labores de señalización. Difundir el plan de evacuación. Activar la alarma de evacuación. Conducir la evacuación de los alumnos a los puntos de encuentro. Conteo final en coordinación con los directores de cada curso. Elaboración de reporte de evaluación sobre participación, tiempos de desplazamiento, orden.",
      formGroup: {
        name: "row2",
        formControls: ["nombreResponsables", "suplentes"]
      }
    },
    {
      organizacion: "Brigadas de primeros auxilios",
      funciones:
        "Atender los casos específicos de primeros auxilios básicos. Definir un lugar para proveer la atención primaria a los afectados. Identificar los centros asistenciales cercanos a la I.E Mantener actualizado un directorio de entidades de ayuda. Mantener vigente el kit de emergencias de la I.E Elaborar reporte de atención.",
      formGroup: {
        name: "row3",
        formControls: ["nombreResponsables", "suplentes"]
      }
    },
    {
      organizacion: "Brigadas contra incendios",
      funciones:
        "Atender conatos de incendio, para lo cual deberán haber sido capacitados. Detectar y prevenir incendios dentro de las instalaciones de la I.E Revisar el estado y ubicación de los extintores o sistemas contra incendio. Hacer inventario de recursos necesarios para atender incendios. Identificar puntos de abastecimiento de agua. Comunicar a los bomberos siempre en caso de incendio.",
      formGroup: {
        name: "row4",
        formControls: ["nombreResponsables", "suplentes"]
      }
    },
    {
      organizacion: "Brigadas control tráfico vehicular",
      funciones:
        "Identificar los puntos críticos para el despeje de vías. Controlar la movilidad vehicular para evitar que ponga en riesgo a la comunidad educativa y/o garantizar la evacuación hacia puntos de encuentro externos a la I.E.",
      formGroup: {
        name: "row5",
        formControls: ["nombreResponsables", "suplentes"]
      }
    },
    {
      organizacion: "Brigadas servicios sanitarios",
      funciones:
        "Identificar focos de contaminación del agua y/o del aire. Implementar medidas de saneamiento básico. Coordinar la prestación del servicio de agua y energía siempre y cuando no representen un riesgo.",
      formGroup: {
        name: "row6",
        formControls: ["nombreResponsables", "suplentes"]
      }
    }
  ];
  dataSourceServiciosRespuestaEmergencia = new MatTableDataSource<
    DataElementTwoAnswer
  >(this.ELEMENT_DATA_SERVICIOS_RESPUESTA_EMERGENCIAS);
  displayedColumnsServiciosRespuestaEmergencia: string[] = [
    "organizacion",
    "funciones",
    "nombreResponsables",
    "suplentes"
  ];
  formParcialServiciosRespuestaEmergencia = new FormGroup({});

  constructor(private _operacionesTabla: OperacionesTablaService) {
    this._operacionesTabla.buildForm(
      this.formParcialServiciosRespuestaEmergencia,
      this.ELEMENT_DATA_SERVICIOS_RESPUESTA_EMERGENCIAS
    );
  }

  ngOnInit() {}
}
