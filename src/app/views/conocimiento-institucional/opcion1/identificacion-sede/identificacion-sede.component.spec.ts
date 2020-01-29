import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionSedeComponent } from './identificacion-sede.component';

describe('IdentificacionSedeComponent', () => {
  let component: IdentificacionSedeComponent;
  let fixture: ComponentFixture<IdentificacionSedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionSedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
