export class PreparacionRespuestaEmergencia {
  idCampus: string;
  servicioRespuestaEmergencia: ServicioRespuestaEmergencia = new ServicioRespuestaEmergencia();
  capacitacion: Capacitacion = new Capacitacion();
  equipamientoRespuesta: EquipamientoRespuesta = new EquipamientoRespuesta();
  entrenamiento: Entrenamiento = new Entrenamiento();

  constructor(idCampus?: string, args?: PreparacionRespuestaEmergencia) {
    if (idCampus != null) {
      this.idCampus = idCampus;
    }
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

//Servicios de respuesta a emergencias
export class ServicioRespuestaEmergencia {
  serviciosExternosRespuestaEmergencias: ServicioExternoRespuestaEmergencia[] = [];
  serviciosInternosRespuestaEmergencias: ServicioInternoRespuestaEmergencia[] = [
    {
      organizacion: "Coordinador de la respuesta escolar a emergencias",
      funciones:
        "Obtener y analizar información sobre el evento.Informar a sus brigadas las condiciones del evento.Activar la respuesta a emergencias.Coordinar y optimizar los recursos humanos y técnicos para atender la emergencia.Servir de conexión con entidades operativas.Informar a la comunidad educativa sobre el estado de la emergencia.Apoyar al rector(a) en la toma de decisiones.Consolidar los reportes de las brigadas de la escuela.",
      responsables: "",
      suplentes: ""
    },
    {
      organizacion: "Brigadas de evacuación",
      funciones:
        "Planear y ejecutar simulacros de evacuación por cursos y general. Llevar a cabo labores de señalización. Difundir el plan de evacuación. Activar la alarma de evacuación. Conducir la evacuación de los alumnos a los puntos de encuentro. Conteo final en coordinación con los directores de cada curso. Elaboración de reporte de evaluación sobre participación, tiempos de desplazamiento, orden.",
      responsables: "",
      suplentes: ""
    },
    {
      organizacion: "Brigadas de primeros auxilios",
      funciones:
        "Atender los casos específicos de primeros auxilios básicos. Definir un lugar para proveer la atención primaria a los afectados. Identificar los centros asistenciales cercanos a la I.E Mantener actualizado un directorio de entidades de ayuda. Mantener vigente el kit de emergencias de la I.E Elaborar reporte de atención.",
      responsables: "",
      suplentes: ""
    },
    {
      organizacion: "Brigadas contra incendios",
      funciones:
        "Atender conatos de incendio, para lo cual deberán haber sido capacitados. Detectar y prevenir incendios dentro de las instalaciones de la I.E Revisar el estado y ubicación de los extintores o sistemas contra incendio. Hacer inventario de recursos necesarios para atender incendios. Identificar puntos de abastecimiento de agua. Comunicar a los bomberos siempre en caso de incendio.",
      responsables: "",
      suplentes: ""
    },
    {
      organizacion: "Brigadas control tráfico vehicular",
      funciones:
        "Identificar los puntos críticos para el despeje de vías. Controlar la movilidad vehicular para evitar que ponga en riesgo a la comunidad educativa y/o garantizar la evacuación hacia puntos de encuentro externos a la I.E.",
      responsables: "",
      suplentes: ""
    },
    {
      organizacion: "Brigadas servicios sanitarios",
      funciones:
        "Identificar focos de contaminación del agua y/o del aire. Implementar medidas de saneamiento básico. Coordinar la prestación del servicio de agua y energía siempre y cuando no representen un riesgo.",
      responsables: "",
      suplentes: ""
    }
  ];
  constructor(args?: ServicioRespuestaEmergencia) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class ServicioExternoRespuestaEmergencia {
  institucion: string = "";
  nombreContacto: string = "";
  telefono: string = "";

  constructor(args?: ServicioExternoRespuestaEmergencia) {
    for (const key in args) {
      this[key] = args[key];
    }
  }

  valid(): boolean {
    if (
      this.institucion == "" ||
      this.nombreContacto == "" ||
      this.telefono == ""
    ) {
      return false;
    }
    return true;
  }

  getValue() {
    return { ...this };
  }

  reset() {
    this.institucion = "";
    this.nombreContacto = "";
    this.telefono = "";
  }
}
export class ServicioInternoRespuestaEmergencia {
  funciones: string = "";
  organizacion: string = "";
  responsables: string = "";
  suplentes: string = "";

  constructor(args?: ServicioInternoRespuestaEmergencia) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

//Capacitacion
export class Capacitacion {
  servicios: Servicio[] = [
    {
      servicio: "Coordinación de la respuesta escolar a emergencias",
      numeroPersonasCapacitadas: null,
      numeroPersonasCapacitar: null,
      oferenteCapacitacion: "",
      responsable: "",
      fechaCapacitacion: null,
      recursos: ""
    },
    {
      servicio: "Extinción de incendios",
      numeroPersonasCapacitadas: null,
      numeroPersonasCapacitar: null,
      oferenteCapacitacion: "",
      responsable: "",
      fechaCapacitacion: null,
      recursos: ""
    },
    {
      servicio: "Primeros auxilios",
      numeroPersonasCapacitadas: null,
      numeroPersonasCapacitar: null,
      oferenteCapacitacion: "",
      responsable: "",
      fechaCapacitacion: null,
      recursos: ""
    },
    {
      servicio: "Evacuación",
      numeroPersonasCapacitadas: null,
      numeroPersonasCapacitar: null,
      oferenteCapacitacion: "",
      responsable: "",
      fechaCapacitacion: null,
      recursos: ""
    },
    {
      servicio: "Tráfico vehicular",
      numeroPersonasCapacitadas: null,
      numeroPersonasCapacitar: null,
      oferenteCapacitacion: "",
      responsable: "",
      fechaCapacitacion: null,
      recursos: ""
    }
  ];

  constructor(args?: Capacitacion) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class Servicio {
  servicio: string = "";
  numeroPersonasCapacitadas: number = null;
  numeroPersonasCapacitar: number = null;
  oferenteCapacitacion: string = "";
  responsable: string = "";
  fechaCapacitacion: Date = null;
  recursos: string = "";

  constructor(args?: Servicio) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

//Equipamiento para la respuesta
export class EquipamientoRespuesta {
  equipamientoIncendios: EquipamientoIncendio[] = [];
  equipamientoPrimerosAuxilios: EquipamientoPrimerAuxilio[] = [];
  necesidadesPenalizacion: NecesidadPenalizacion[] = [];
  necesidadesAlarmas: NecesidadAlarma[] = [];
  necesidadesComunicacion: NecesidadComunicacion[] = [];

  constructor(args?: EquipamientoRespuesta) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class EquipamientoIncendio {
  verificacionExistenciaCondicion: string = "";
  cantidadEquiposRequeridos: number = null;
  responsable: string = "";
  fechaAdquisicion: Date = null;
  recursos: string = "";

  constructor(args?: EquipamientoIncendio) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class EquipamientoPrimerAuxilio {
  verificacionExistenciaCondicion: string = "";
  cantidadEquiposRequeridos: number = null;
  responsable: string = "";
  fechaAdquisicion: Date = null;
  recursos: string = "";

  constructor(args?: EquipamientoPrimerAuxilio) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class NecesidadPenalizacion {
  senialesExistentes: number = null;
  senialesRequeridas: number = null;
  responsable: string = "";
  fechaAdquisicion: Date = null;
  recursos: string = "";

  constructor(args?: NecesidadPenalizacion) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class NecesidadAlarma {
  verificacionCaracteristica: string = "";
  modificaciones: string = "";
  responsable: string = "";
  fechaAccion: Date = null;
  recursos: string = "";

  constructor(args?: NecesidadAlarma) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
export class NecesidadComunicacion {
  verificacionExistenciaCondicion: string = "";
  cantidadEquiposRequeridos: number = null;
  responsable: string = "";
  fechaAdquisicion: Date = null;
  recursos: string = "";

  constructor(args?: NecesidadComunicacion) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

//Entrenamiento
export class Entrenamiento {
  actividades: Actividad[] = [];
}
export class Actividad {
  tiempo: number = null;
  dificultades: string = "";
  accionesMejoramiento: string = "";
  responsable: string = "";
  fechaAcciones: Date = null;
  recursos: string = "";

  constructor(args?: Actividad) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
