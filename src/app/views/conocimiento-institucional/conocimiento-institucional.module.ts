import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConocimientoInstitucionalRoutingModule } from './conocimiento-institucional-routing.module';
import { HeaderConocimientoInstitucionalComponent } from 'src/app/components/headers/header-conocimiento-institucional/header-conocimiento-institucional.component';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { ConocimientoInstitucionalComponent } from './conocimiento-institucional.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ConocimientoInstitucionalComponent,HeaderConocimientoInstitucionalComponent],
  imports: [
    CommonModule,
    ConocimientoInstitucionalRoutingModule,
    AppMaterialModule,
  ]
})
export class ConocimientoInstitucionalModule { }
