import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorarRiesgoComponent } from './valorar-riesgo.component';

describe('ValorarRiesgoComponent', () => {
  let component: ValorarRiesgoComponent;
  let fixture: ComponentFixture<ValorarRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorarRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
