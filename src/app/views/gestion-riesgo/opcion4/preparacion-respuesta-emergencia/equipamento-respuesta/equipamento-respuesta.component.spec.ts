import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoRespuestaComponent } from './equipamento-respuesta.component';

describe('EquipamentoRespuestaComponent', () => {
  let component: EquipamentoRespuestaComponent;
  let fixture: ComponentFixture<EquipamentoRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentoRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentoRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
