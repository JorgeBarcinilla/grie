import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDanosComponent } from './reporte-danos.component';

describe('ReporteDanosComponent', () => {
  let component: ReporteDanosComponent;
  let fixture: ComponentFixture<ReporteDanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
