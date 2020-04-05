import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { default as es, default as localeEs } from "@angular/common/locales/es";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { es_ES, NZ_I18N } from "ng-zorro-antd";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ImageExampleComponent } from "./components/utils/image-example/image-example.component";
import { NotificacionService } from "./services/notification/notification.service";
import { AppMaterialModule } from "./shared/angular-material.module";
import { ModalAgregarEdificioComponent } from "./views/conocimiento-institucional/opcion1/identificacion-sede/modal-agregar-edificio/modal-agregar-edificio.component";

registerLocaleData(localeEs, es);

@NgModule({
  declarations: [
    AppComponent,
    ImageExampleComponent,
    ModalAgregarEdificioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [NotificacionService, { provide: NZ_I18N, useValue: es_ES }],
  entryComponents: [ImageExampleComponent, ModalAgregarEdificioComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
