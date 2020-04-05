import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalControlesRiesgosComponent } from './modal-controles-riesgos.component';

describe('ModalControlesRiesgosComponent', () => {
  let component: ModalControlesRiesgosComponent;
  let fixture: ComponentFixture<ModalControlesRiesgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalControlesRiesgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalControlesRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
