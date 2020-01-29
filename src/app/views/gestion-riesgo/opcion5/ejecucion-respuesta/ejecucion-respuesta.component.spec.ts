import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionRespuestaComponent } from './ejecucion-respuesta.component';

describe('EjecucionRespuestaComponent', () => {
  let component: EjecucionRespuestaComponent;
  let fixture: ComponentFixture<EjecucionRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
