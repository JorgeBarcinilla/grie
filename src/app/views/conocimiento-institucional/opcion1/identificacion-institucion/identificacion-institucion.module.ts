import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificacionInstitucionRoutingModule } from './identificacion-institucion-routing.module';
import { IdentificacionInstitucionComponent } from './identificacion-institucion.component';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';
import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';


@NgModule({
  declarations: [IdentificacionInstitucionComponent],
  imports: [
    CommonModule,
    IdentificacionInstitucionRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class IdentificacionInstitucionModule { }
