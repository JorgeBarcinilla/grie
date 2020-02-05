import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVistaComponent } from './info-vista.component';

describe('InfoVistaComponent', () => {
  let component: InfoVistaComponent;
  let fixture: ComponentFixture<InfoVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
