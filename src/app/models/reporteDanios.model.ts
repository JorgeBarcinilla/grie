export class ReporteDanio {
  idCampus?: string;
  reportes: Reporte[] = [];

  constructor(idCampus?: string, args?: ReporteDanio) {
    if (idCampus != null) {
      this.idCampus = idCampus;
    }
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

export class Reporte {
  fechaEvento: Date = null;
  diligenciadoPor: string = null;
  telefono: string = null;
  fenomeno: string = null;
  descripcionProyecto: string = null;
  estudiantesAfectados: number = null;
  docentesAfectados: number = null;
  personalAdministrativoAfectados: number = null;
  personalServiciosGeneralesAfectados: number = null;
  directivosAfectados: number = null;
  visitantesAfectados: number = null;
  otroAfectados: number = null;
  tipoServicioSolicitado: { nombre: string; value: boolean }[] = [
    {
      nombre: "Ambulancia",
      value: false
    },
    {
      nombre: "Bomberos",
      value: false
    },
    {
      nombre: "Policía",
      value: false
    },
    {
      nombre: "Policía de transito",
      value: false
    },
    {
      nombre: "Manejo de servicios públicos",
      value: false
    },
    {
      nombre: "Otro",
      value: false
    }
  ];
  descripcionNecesidades: string = "";
  edificacionesAfectadas: Edificacion[] = [];

  constructor(args?: ReporteDanio) {
    for (const key in args) {
      this[key] = args[key];
    }
  }

  getValue() {
    return { ...this };
  }

  reset() {
    for (const key in this) {
      this[key] = null;
    }
  }

  valid() {
    for (const key in this) {
      if (this[key] == null) {
        return false;
      }
    }
    return true;
  }
}

export class Edificacion {
  tipo: string = null;
  cantidad: number = null;
  descripcion: string = null;

  constructor(args?: Edificacion) {
    for (const key in args) {
      this[key] = args[key];
    }
  }

  getValue() {
    return { ...this };
  }

  reset() {
    for (const key in this) {
      this[key] = null;
    }
  }

  valid() {
    for (const key in this) {
      if (this[key] == null) {
        return false;
      }
    }
    return true;
  }
}
