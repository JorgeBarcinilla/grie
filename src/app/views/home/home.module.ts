import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderHomeComponent } from 'src/app/components/headers/header-home/header-home.component';



@NgModule({
  declarations: [HomeComponent,HeaderHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule
  ]
})
export class HomeModule { }
