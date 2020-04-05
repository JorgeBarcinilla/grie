export interface Riesgo {
  _id?: string;
  idCampus: string;
  proceso: string;
  riesgo: string;
  tipo: string;
  escenarioRiesgo?: string;
  activo?: string;
  amenaza?: string;
  descripcion: string;
  causas: Causa[];
  concecuencias: [string];
  nivelImpacto?: string;
  probabilidad?: string;
  solidez?: string;
}

export interface Causa {
  _id?: string;
  nombre: string;
  control?: Control;
}

export interface Control {
  _id?: string;
  nombre: string;
  criterio1: { a: string; b: string };
  criterio2: string;
  criterio3: string;
  criterio4: string;
  criterio5: string;
  criterio6: string;
  calificacionDisenio: string;
  calificacionEjecucion: string;
  solidez: string;
  fortalecer: string;
}
