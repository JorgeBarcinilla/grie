import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRiesgoComponent } from './gestion-riesgo.component';

describe('GestionRiesgoComponent', () => {
  let component: GestionRiesgoComponent;
  let fixture: ComponentFixture<GestionRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
