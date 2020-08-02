import { Injectable } from "@angular/core";
import { Reporte, ReporteDanio } from "src/app/models/reporteDanios.model";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class ReporteDaniosService {
  constructor(private _globalService: GlobalService) {}

  crearReportesDanio(reporteDanio: ReporteDanio) {
    return this._globalService.getQuery(
      "/reporteDanio/create",
      "post",
      true,
      reporteDanio
    );
  }

  obtenerReportesDanio(idSede: string) {
    return this._globalService.getQuery(
      "/reporteDanio/get/" + idSede,
      "get",
      true
    );
  }

  guardarReporteDanio(idCampus: string, reporteDanio: Reporte) {
    return this._globalService.getQuery(
      "/reporteDanio/guardarReporte/" + idCampus,
      "post",
      true,
      reporteDanio
    );
  }
}
