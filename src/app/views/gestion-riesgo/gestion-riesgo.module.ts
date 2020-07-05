import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderGestionRiesgoComponent } from "src/app/components/headers/header-gestionRiesgo/header-gestionRiesgo.component";
import { InfoVistaComponent } from "src/app/components/info-vista/info-vista.component";
import { AppMaterialModule } from "src/app/shared/angular-material.module";
import { GestionRiesgoRoutingModule } from "./gestion-riesgo-routing.module";
import { GestionRiesgoComponent } from "./gestion-riesgo.component";

@NgModule({
  declarations: [
    GestionRiesgoComponent,
    HeaderGestionRiesgoComponent,
    InfoVistaComponent
  ],
  imports: [CommonModule, GestionRiesgoRoutingModule, AppMaterialModule]
})
export class GestionRiesgoModule {}
