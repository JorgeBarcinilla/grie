import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoResidualComponent } from './nivel-riesgo-residual.component';

describe('NivelRiesgoResidualComponent', () => {
  let component: NivelRiesgoResidualComponent;
  let fixture: ComponentFixture<NivelRiesgoResidualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelRiesgoResidualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelRiesgoResidualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
