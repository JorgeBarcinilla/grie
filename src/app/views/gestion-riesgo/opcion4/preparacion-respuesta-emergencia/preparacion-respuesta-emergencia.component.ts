import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PreparacionRespuestaEmergencia } from "src/app/models/preparacioRespuestaEmergencia.model";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { PreparacionRespuestaService } from "src/app/services/gestion-riesgo/preparacionRespuesta.service";

@Component({
  selector: "app-preparacion-respuesta-emergencia",
  templateUrl: "./preparacion-respuesta-emergencia.component.html",
  styleUrls: ["./preparacion-respuesta-emergencia.component.css"]
})
export class preparacionRespuestaEmergenciaComponent implements OnInit {
  preparacionRespuestaEmergencia: PreparacionRespuestaEmergencia;
  idSede: string;

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _preparacionRespuestaEmergenciaService: PreparacionRespuestaService
  ) {}

  subscribeIdSede: Subscription;
  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this._preparacionRespuestaEmergenciaService
          .obtenerPreparacionRespuesta(this.idSede)
          .subscribe((res: PreparacionRespuestaEmergencia) => {
            if (res != null) {
              this.preparacionRespuestaEmergencia = new PreparacionRespuestaEmergencia(
                null,
                res
              );
            } else {
              this.preparacionRespuestaEmergencia = new PreparacionRespuestaEmergencia(
                idSede
              );
              this._preparacionRespuestaEmergenciaService
                .crearPreparacionRespuesta(this.preparacionRespuestaEmergencia)
                .subscribe(res => {
                  console.log(res);
                });
            }
          });
      });
  }
}
