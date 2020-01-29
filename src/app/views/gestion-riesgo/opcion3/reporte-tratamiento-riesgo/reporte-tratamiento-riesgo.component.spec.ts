import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTratamientoRiesgoComponent } from './reporte-tratamiento-riesgo.component';

describe('ReporteTratamientoRiesgoComponent', () => {
  let component: ReporteTratamientoRiesgoComponent;
  let fixture: ComponentFixture<ReporteTratamientoRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTratamientoRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTratamientoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
