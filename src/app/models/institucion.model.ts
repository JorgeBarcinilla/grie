export interface Institucion {
  _id?: string;
  idUser?: string;
  nombre: string;
  codDane: string;
  rector: string;
  coordinador: string;
  liderPRAE?: string;
  liderLogistica?: string;
  liderConsejoAcademico?: string;
  liderBrigada?: string;
  liderPadres?: string;
  liderEstudiantes?: string;
  representanteOrganismosSocorro?: string;
  mision?: string;
  vision?: string;
  objetivos?: string;
  valores?: string;
}
