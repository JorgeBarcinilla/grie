import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConocimientoInstitucionalComponent } from './header-conocimiento-institucional.component';

describe('HeaderConocimientoInstitucionalComponent', () => {
  let component: HeaderConocimientoInstitucionalComponent;
  let fixture: ComponentFixture<HeaderConocimientoInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderConocimientoInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConocimientoInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
