import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepracionRespuestaEmergenciaComponent } from './prepracion-respuesta-emergencia.component';

describe('PrepracionRespuestaEmergenciaComponent', () => {
  let component: PrepracionRespuestaEmergenciaComponent;
  let fixture: ComponentFixture<PrepracionRespuestaEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepracionRespuestaEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepracionRespuestaEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
