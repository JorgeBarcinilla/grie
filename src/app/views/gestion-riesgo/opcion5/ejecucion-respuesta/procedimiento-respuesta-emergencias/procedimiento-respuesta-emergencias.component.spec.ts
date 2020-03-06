import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoRespuestaEmergenciasComponent } from './procedimiento-respuesta-emergencias.component';

describe('ProcedimientoRespuestaEmergenciasComponent', () => {
  let component: ProcedimientoRespuestaEmergenciasComponent;
  let fixture: ComponentFixture<ProcedimientoRespuestaEmergenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoRespuestaEmergenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoRespuestaEmergenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
