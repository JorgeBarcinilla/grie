import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionRecuperacionComponent } from './preparacion-recuperacion.component';

describe('PreparacionRecuperacionComponent', () => {
  let component: PreparacionRecuperacionComponent;
  let fixture: ComponentFixture<PreparacionRecuperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparacionRecuperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
