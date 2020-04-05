import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EvaluacionRiesgoRoutingModule } from "./evaluacion-riesgo-routing.module";
import { EvaluacionRiesgoComponent } from "./evaluacion-riesgo.component";
import { AppMaterialModule } from "src/app/shared/angular-material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CardTitleModule } from "src/app/components/utils/card-title/card-title.module";

import { ButtonExampleModule } from "src/app/components/utils/button-example/button-example.module";
import { ValoracionControlesComponent } from "./valoracion-controles/valoracion-controles.component";
import { NivelRiesgoResidualComponent } from "./nivel-riesgo-residual/nivel-riesgo-residual.component";
import { TratamientoRiesgoComponent } from "./tratamiento-riesgo/tratamiento-riesgo.component";
import { ModalControlesRiesgosComponent } from "./modals/modal-controles-riesgos/modal-controles-riesgos.component";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzDividerModule } from "ng-zorro-antd";
import { NzPopoverModule } from "ng-zorro-antd/popover";

@NgModule({
  declarations: [
    EvaluacionRiesgoComponent,
    ValoracionControlesComponent,
    NivelRiesgoResidualComponent,
    TratamientoRiesgoComponent,
    ModalControlesRiesgosComponent,
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
  ],
  entryComponents: [ModalControlesRiesgosComponent],
})
export class EvaluacionRiesgoModule {}
