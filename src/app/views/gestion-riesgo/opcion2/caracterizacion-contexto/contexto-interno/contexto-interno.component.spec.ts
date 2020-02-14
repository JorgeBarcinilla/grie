import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoInternoComponent } from './contexto-interno.component';

describe('ContextoInternoComponent', () => {
  let component: ContextoInternoComponent;
  let fixture: ComponentFixture<ContextoInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
