export class EjecucionRecuperacion {
  idCampus: string;
  ejecuciones: Ejecucion[] = [];

  constructor(idCampus?: string, args?: EjecucionRecuperacion) {
    if (idCampus != null) {
      this.idCampus = idCampus;
    }
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

export class Ejecucion {
  _id?: string;
  necesidad: string = "";
  ejecutor: string = "";
  diasEjecucion: number = null;
  acciones: string = "";
  seguimiento: {
    respuesta: string;
    accion: string;
  } = {
    respuesta: "",
    accion: ""
  };

  constructor(args?: EjecucionRecuperacion) {
    for (const key in args) {
      this[key] = args[key];
    }
  }

  valid(): boolean {
    if (
      this.necesidad == "" ||
      this.ejecutor == "" ||
      this.acciones == "" ||
      this.diasEjecucion == null
    ) {
      return false;
    }
    return true;
  }

  getValue() {
    return { ...this };
  }

  reset() {
    this.necesidad = "";
    this.ejecutor = "";
    this.acciones = "";
    this.diasEjecucion = null;
  }
}
