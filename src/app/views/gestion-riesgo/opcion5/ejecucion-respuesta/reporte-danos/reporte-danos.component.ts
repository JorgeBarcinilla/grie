import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reporte-danos",
  templateUrl: "./reporte-danos.component.html",
  styleUrls: ["./reporte-danos.component.css"]
})
export class ReporteDanosComponent implements OnInit {
  fenomenos = [
    "Sismo",
    "Inundación",
    "Deslizamiento",
    "Avalancha",
    "Accidente de transito",
    "Contaminación",
    "Vendaval",
    "Tormenta eléctrica",
    "Caída del árbol",
    "Incendio forestal",
    "Toma armada",
    "Descarga eléctrica",
    "Incendio estructural",
    "Explosión",
    "Estampida de estudiantes",
    "Accidente de laboratorio",
    "Atentado terrorista",
    "Otro"
  ];

  tiposRespuestas = [
    {
      nombre: "Ambulancia",
      value: false
    },
    {
      nombre: "Bomberos",
      value: false
    },
    {
      nombre: "Policia",
      value: false
    },
    {
      nombre: "Policia de transito",
      value: false
    },
    {
      nombre: "Manejo de servicios publicos",
      value: false
    },
    {
      nombre: "Otro",
      value: false
    }
  ];

  edificaciones = [
    "Almacen",
    "Auditorio",
    "Baño",
    "Biblioteca",
    "Bodega",
    "Cafetería",
    "Canchas y/o polideportivo",
    "Cocina",
    "Comedor",
    "Enfermería",
    "Gimnasio",
    "Laboratorio",
    "Oficina",
    "Parqueadero",
    "Punto de primeros auxilios",
    "Sala de informática",
    "Sala de profesores",
    "Salon",
    "Salón de arte",
    "Garitas (vigilancia)"
  ];

  listaEdidficacionesAfectadas = [];

  listaReportes = [];
  displayedColumnsReportes: string[] = [
    "fecha",
    "fenomeno",
    "descripcion",
    "accion"
  ];

  constructor() {}

  ngOnInit() {}
}
