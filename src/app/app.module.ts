import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageExampleComponent } from './components/utils/image-example/image-example.component';
import { AppMeterialModule } from './shared/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMeterialModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [ImageExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
