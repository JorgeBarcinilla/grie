export interface Sede {
    _id: string;
    idSchool? : string;
    nombre : string;
    codDane? : string;
    coordinador? : string;
    cantEstudiantes? : string;
    cantDocentes? : string;
    datosNivelDirectivo? : [{}];
    municipio? : string;
    barrio? : string;
    direccion? : string;
    telefono? : string;
    correo? : string;
    limiteNorte? : string;
    limiteEste? : string;
    limiteOeste? : string;
    limiteSur? : string;
    anioConstruccion?: string;
    areaConstruida?: string;
    areaLibre?: string;
    archivosSoporte?: string;
    edificios?: [{}];
    jornadas?: [string];
}
