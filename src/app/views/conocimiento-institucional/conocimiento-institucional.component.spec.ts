import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientoInstitucionalComponent } from './conocimiento-institucional.component';

describe('ConocimientoInstitucionalComponent', () => {
  let component: ConocimientoInstitucionalComponent;
  let fixture: ComponentFixture<ConocimientoInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocimientoInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocimientoInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
