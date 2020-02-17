import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExampleComponent } from './button-example.component';
import { MatIconModule, MatTooltipModule } from '@angular/material';



@NgModule({
  declarations: [ButtonExampleComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports:[
    ButtonExampleComponent
  ]
})
export class ButtonExampleModule { }
