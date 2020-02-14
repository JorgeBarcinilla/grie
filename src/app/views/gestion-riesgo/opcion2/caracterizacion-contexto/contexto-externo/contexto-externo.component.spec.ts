import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoExternoComponent } from './contexto-externo.component';

describe('ContextoExternoComponent', () => {
  let component: ContextoExternoComponent;
  let fixture: ComponentFixture<ContextoExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
