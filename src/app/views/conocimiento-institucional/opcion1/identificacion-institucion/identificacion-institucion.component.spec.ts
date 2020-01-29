import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionInstitucionComponent } from './identificacion-institucion.component';

describe('IdentificacionInstitucionComponent', () => {
  let component: IdentificacionInstitucionComponent;
  let fixture: ComponentFixture<IdentificacionInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
