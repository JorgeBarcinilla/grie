import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ImageExampleComponent } from "./components/utils/image-example/image-example.component";
import { AppMaterialModule } from "./shared/angular-material.module";
import { ModalAgregarEdificioComponent } from "./views/conocimiento-institucional/opcion1/identificacion-sede/modal-agregar-edificio/modal-agregar-edificio.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NotificacionService } from "./services/notification/notification.service";
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageExampleComponent,
    ModalAgregarEdificioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [NotificacionService],
  entryComponents: [ImageExampleComponent, ModalAgregarEdificioComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
