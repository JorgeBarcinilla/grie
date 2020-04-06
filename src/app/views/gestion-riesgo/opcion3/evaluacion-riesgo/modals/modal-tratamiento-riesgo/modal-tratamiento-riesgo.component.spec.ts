import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTratamientoRiesgoComponent } from './modal-tratamiento-riesgo.component';

describe('ModalTratamientoRiesgoComponent', () => {
  let component: ModalTratamientoRiesgoComponent;
  let fixture: ComponentFixture<ModalTratamientoRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTratamientoRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTratamientoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
