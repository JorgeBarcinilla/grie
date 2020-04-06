import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccionCausaComponent } from './modal-accion-causa.component';

describe('ModalAccionCausaComponent', () => {
  let component: ModalAccionCausaComponent;
  let fixture: ComponentFixture<ModalAccionCausaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAccionCausaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAccionCausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
