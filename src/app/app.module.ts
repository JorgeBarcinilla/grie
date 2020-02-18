import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageExampleComponent } from './components/utils/image-example/image-example.component';
import { AppMaterialModule } from './shared/angular-material.module';
import { HeaderHomeComponent } from './components/headers/header-home/header-home.component';
import { HeaderConocimientoInstitucionalComponent } from './components/headers/header-conocimiento-institucional/header-conocimiento-institucional.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [ImageExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
