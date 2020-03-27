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
  causas: [string];
  concecuencias: [string];
  nivelImpacto?: string;
  probabilidad?: string;
}
