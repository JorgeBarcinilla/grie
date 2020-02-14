import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionActivosSeguridadComponent } from './identificacion-activos-seguridad.component';

describe('IdentificacionActivosSeguridadComponent', () => {
  let component: IdentificacionActivosSeguridadComponent;
  let fixture: ComponentFixture<IdentificacionActivosSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionActivosSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionActivosSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
