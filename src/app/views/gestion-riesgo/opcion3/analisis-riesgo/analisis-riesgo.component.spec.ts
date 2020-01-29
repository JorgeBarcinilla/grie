import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisRiesgoComponent } from './analisis-riesgo.component';

describe('AnalisisRiesgoComponent', () => {
  let component: AnalisisRiesgoComponent;
  let fixture: ComponentFixture<AnalisisRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
