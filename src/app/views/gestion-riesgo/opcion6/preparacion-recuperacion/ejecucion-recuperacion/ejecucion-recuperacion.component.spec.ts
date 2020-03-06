import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionRecuperacionComponent } from './ejecucion-recuperacion.component';

describe('EjecucionRecuperacionComponent', () => {
  let component: EjecucionRecuperacionComponent;
  let fixture: ComponentFixture<EjecucionRecuperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionRecuperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
