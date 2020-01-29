import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterizacionContextoComponent } from './caracterizacion-contexto.component';

describe('CaracterizacionContextoComponent', () => {
  let component: CaracterizacionContextoComponent;
  let fixture: ComponentFixture<CaracterizacionContextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracterizacionContextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterizacionContextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
