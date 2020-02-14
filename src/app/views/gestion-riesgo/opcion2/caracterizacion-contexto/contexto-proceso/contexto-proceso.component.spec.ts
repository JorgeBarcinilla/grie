import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoProcesoComponent } from './contexto-proceso.component';

describe('ContextoProcesoComponent', () => {
  let component: ContextoProcesoComponent;
  let fixture: ComponentFixture<ContextoProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
