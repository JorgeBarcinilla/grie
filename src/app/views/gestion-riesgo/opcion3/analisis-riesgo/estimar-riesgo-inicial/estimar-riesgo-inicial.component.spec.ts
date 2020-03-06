import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimarRiesgoInicialComponent } from './estimar-riesgo-inicial.component';

describe('EstimarRiesgoInicialComponent', () => {
  let component: EstimarRiesgoInicialComponent;
  let fixture: ComponentFixture<EstimarRiesgoInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimarRiesgoInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimarRiesgoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
