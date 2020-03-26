export interface CaracterizacionContexto {
  _id?: string;
  idCampus: string;
  contextoExterno: ContextoExterno;
  contextoInterno: ContextoInterno;
  contextoProceso: ContextoProceso;
  identificacionActivos: IdentificacionActivos;
}

export interface ContextoExterno {
  contextoPolitico: string;
  contextoEconomicoFinanciero: string;
  contextoTecnologico: string;
  contextoLegalReglamentario: string;
  contextoOtro: string;
  contextoSocialCultural: string;
  contextoAmbiental: string;
}

export interface ContextoInterno {
  estructuraOrganizacional: string;
  estructuraFisica: [
    {
      nombre: string;
      calificacion: string;
      icon: string;
    }
  ];
  financieros: [
    {
      nombre: string;
      rubro: string;
    }
  ];
  comunidadEducativa: [
    {
      tipoPoblacion: string;
      cantidad: string;
      cantidadDiscapacitados: string;
      tiposDiscapacidad: [string];
    }
  ];
  factoresEducativos: {
    pregunta1: {
      respuesta: string;
    };
    pregunta2: {
      respuesta: string;
    };
    pregunta3: {
      respuesta: string;
    };
    pregunta4: {
      respuesta: string;
    };
  };
  CRAE: {
    pregunta1: {
      respuesta: string;
    };
    pregunta2: {
      respuesta: string;
    };
    pregunta3: {
      respuesta: string;
    };
    pregunta4: {
      respuesta: string;
    };
    pregunta5: {
      respuesta: string;
    };
  };
  comunicacionInterna: [
    {
      row: {
        pregunta: string;
        formGroup: {
          name: string;
          formControls: [string];
        };
      };
      respuesta: string;
    }
  ];
}

export interface ContextoProceso {
  procesos: [
    {
      proceso: string;
      responsable: string;
      objetivo: string;
      alcance: string;
      entradaProceso: string;
      actividadesClaves: string;
      salidaProceso: string;
      clientesProceso: string;
      recursos: string;
      requisitos: string;
      documentosInstitucionales: string;
      indicadores: string;
    }
  ];
}

export interface IdentificacionActivos {
  activos: [
    {
      proceso: string;
      activo: string;
      tipoActivo: string;
      responsable: string;
      descripcion: string;
      tipoInformacion: string;
      tipoDato: string;
      criticidadRespectoConfidencialidad: string;
      criticidadRespectoIntegridad: string;
      criticidadRespectoDisponibilidad: string;
      nivelCriticidad: string;
    }
  ];
}
