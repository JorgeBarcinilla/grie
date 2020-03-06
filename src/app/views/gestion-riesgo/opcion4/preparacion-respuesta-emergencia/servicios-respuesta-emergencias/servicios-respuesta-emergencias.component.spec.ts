import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosRespuestaEmergenciasComponent } from './servicios-respuesta-emergencias.component';

describe('ServiciosRespuestaEmergenciasComponent', () => {
  let component: ServiciosRespuestaEmergenciasComponent;
  let fixture: ComponentFixture<ServiciosRespuestaEmergenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosRespuestaEmergenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosRespuestaEmergenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
