import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title.component';



@NgModule({
  declarations: [CardTitleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CardTitleComponent
  ]
})
export class CardTitleModule { }
