import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionRiesgoComponent } from './evaluacion-riesgo.component';

describe('EvaluacionRiesgoComponent', () => {
  let component: EvaluacionRiesgoComponent;
  let fixture: ComponentFixture<EvaluacionRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
