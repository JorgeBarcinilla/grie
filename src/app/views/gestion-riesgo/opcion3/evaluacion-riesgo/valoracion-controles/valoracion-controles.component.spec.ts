import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionControlesComponent } from './valoracion-controles.component';

describe('ValoracionControlesComponent', () => {
  let component: ValoracionControlesComponent;
  let fixture: ComponentFixture<ValoracionControlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionControlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
