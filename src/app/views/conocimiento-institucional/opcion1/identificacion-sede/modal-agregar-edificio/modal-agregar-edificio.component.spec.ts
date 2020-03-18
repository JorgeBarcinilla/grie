import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEdificioComponent } from './modal-agregar-edificio.component';

describe('ModalAgregarEdificioComponent', () => {
  let component: ModalAgregarEdificioComponent;
  let fixture: ComponentFixture<ModalAgregarEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
