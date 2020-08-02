export class ValoracionSituacion {
  idCampus: string;
  valoraciones: Valoracion[] = [
    {
      informacion: "Está funcionando la I. E",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Las instalaciones escolares son seguras",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Dispone de agua limpia",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Dispone de equipamiento (pupitres, tableros, etc.)",
      estado: null,
      detalle: ""
    },
    {
      informacion:
        "Dispone de materiales escolares (cuadernos, textos guía, etc)",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Dispone de docentes",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Existen adultos / jóvenes que puedan ejercer como docentes",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Niños / Niñas están asistiendo a la I. E",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Niños / Niñas dejan de asistir a la I. E",
      estado: null,
      detalle: ""
    },
    {
      informacion:
        "Si la I.E no puede ser usada, existen sitios donde se pudieran dar clases",
      estado: null,
      detalle: ""
    },
    {
      informacion:
        "Estos sitios son suficientes para la cantidad de niños y niñas",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Estos sitios son accesibles",
      estado: null,
      detalle: ""
    },
    {
      informacion: "Estos sitios son seguros",
      estado: null,
      detalle: ""
    },
    {
      informacion:
        "Se brindan mensajes especiales a los niños y niñas sobre salud",
      estado: null,
      detalle: ""
    },
    {
      informacion:
        "Se brindan mensajes especiales a los niños y niñas sobre peligros potenciales",
      estado: null,
      detalle: ""
    },
    {
      informacion:
        "Se brindan mensajes especiales a los niños y niñas sobre formas de protección",
      estado: null,
      detalle: ""
    }
  ];

  constructor(idCampus?: string, args?: Valoracion) {
    if (idCampus != null) {
      this.idCampus = idCampus;
    }
    for (const key in args) {
      this[key] = args[key];
    }
  }
}

export class Valoracion {
  informacion: string = "";
  estado: string = "";
  detalle: string = "";

  constructor(args?: Valoracion) {
    for (const key in args) {
      this[key] = args[key];
    }
  }
}
