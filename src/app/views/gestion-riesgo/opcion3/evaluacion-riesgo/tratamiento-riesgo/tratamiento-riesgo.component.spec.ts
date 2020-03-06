import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoRiesgoComponent } from './tratamiento-riesgo.component';

describe('TratamientoRiesgoComponent', () => {
  let component: TratamientoRiesgoComponent;
  let fixture: ComponentFixture<TratamientoRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
