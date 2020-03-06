import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionSituacionComponent } from './valoracion-situacion.component';

describe('ValoracionSituacionComponent', () => {
  let component: ValoracionSituacionComponent;
  let fixture: ComponentFixture<ValoracionSituacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionSituacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
