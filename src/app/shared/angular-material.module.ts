import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Ng5SliderModule } from 'ng5-slider';
import { MatInputModule, MatButtonModule,
        MatChipsModule, 
         MatBadgeModule,
         MatIconModule, 
         MatIconRegistry, 
         MatGridListModule, 
         MatMenuModule,
         MatRadioModule,
         MatSidenavModule,
         MatProgressSpinnerModule, 
         MatListModule,
         MatTreeModule,
         MatExpansionModule,
         MatTabsModule,
         MatSlideToggleModule,
         MatDialogModule,
         MatTableModule,
         MatDatepickerModule,
         MatNativeDateModule ,
         MatCheckboxModule,
         MatSelectModule,
         MatSnackBarModule,
         MatTooltipModule,
         MatPaginatorModule,
         MatButtonToggleModule,
         MatCardModule,
        MatStepperModule,MatProgressBarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    Ng5SliderModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    DragDropModule,
    MatRadioModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatExpansionModule,
    MatStepperModule,
    MatChipsModule,
    MatProgressBarModule,
    NgxMatSelectSearchModule
  ],exports:[
    Ng5SliderModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatStepperModule,
    MatChipsModule,
    MatProgressBarModule,
    NgxMatSelectSearchModule
  ],
  providers:[
    MatIconRegistry
  ]
})
export class AppMeterialModule { }