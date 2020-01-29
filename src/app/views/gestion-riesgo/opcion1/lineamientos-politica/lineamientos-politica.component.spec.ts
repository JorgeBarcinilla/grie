import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineamientosPoliticaComponent } from './lineamientos-politica.component';

describe('LineamientosPoliticaComponent', () => {
  let component: LineamientosPoliticaComponent;
  let fixture: ComponentFixture<LineamientosPoliticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineamientosPoliticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineamientosPoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
