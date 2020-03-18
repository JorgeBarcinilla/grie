import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificacionSedeRoutingModule } from './identificacion-sede-routing.module';
import { IdentificacionSedeComponent } from './identificacion-sede.component';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';
import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';


@NgModule({
  declarations: [IdentificacionSedeComponent],
  imports: [
    CommonModule,
    IdentificacionSedeRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class IdentificacionSedeModule { }
