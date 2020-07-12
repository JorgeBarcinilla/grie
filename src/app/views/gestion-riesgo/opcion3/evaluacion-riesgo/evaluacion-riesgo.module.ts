import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzDividerModule, NzIconModule } from "ng-zorro-antd";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzTagModule } from "ng-zorro-antd/tag";
import { ButtonExampleModule } from "src/app/components/utils/button-example/button-example.module";
import { CardTitleModule } from "src/app/components/utils/card-title/card-title.module";
import { AppMaterialModule } from "src/app/shared/angular-material.module";
import { EvaluacionRiesgoRoutingModule } from "./evaluacion-riesgo-routing.module";
import { EvaluacionRiesgoComponent } from "./evaluacion-riesgo.component";
import { ModalControlesRiesgosComponent } from "./modals/modal-controles-riesgos/modal-controles-riesgos.component";
import { ValorarRiesgoComponent } from "./modals/valorar-riesgo/valorar-riesgo.component";
import { NivelRiesgoResidualComponent } from "./nivel-riesgo-residual/nivel-riesgo-residual.component";
import { TratamientoRiesgoComponent } from "./tratamiento-riesgo/tratamiento-riesgo.component";
import { ValoracionControlesComponent } from "./valoracion-controles/valoracion-controles.component";
import { ModalTratamientoRiesgoComponent } from "./modals/modal-tratamiento-riesgo/modal-tratamiento-riesgo.component";
import { ModalAccionCausaComponent } from "./modals/modal-accion-causa/modal-accion-causa.component";
import { NzAlertModule } from "ng-zorro-antd/alert";

@NgModule({
  declarations: [
    EvaluacionRiesgoComponent,
    ValoracionControlesComponent,
    NivelRiesgoResidualComponent,
    TratamientoRiesgoComponent,
    ModalControlesRiesgosComponent,
    ValorarRiesgoComponent,
    ModalTratamientoRiesgoComponent,
    ModalAccionCausaComponent
  ],
  imports: [
    CommonModule,
    EvaluacionRiesgoRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule,
    NzTagModule,
    NzDividerModule,
    NzPopoverModule,
    NzIconModule,
    NzAlertModule
  ],
  entryComponents: [
    ModalControlesRiesgosComponent,
    ValorarRiesgoComponent,
    ModalTratamientoRiesgoComponent,
    ModalAccionCausaComponent
  ]
})
export class EvaluacionRiesgoModule {}
