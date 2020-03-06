import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminarProbabilidadComponent } from './determinar-probabilidad.component';

describe('DeterminarProbabilidadComponent', () => {
  let component: DeterminarProbabilidadComponent;
  let fixture: ComponentFixture<DeterminarProbabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminarProbabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminarProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
