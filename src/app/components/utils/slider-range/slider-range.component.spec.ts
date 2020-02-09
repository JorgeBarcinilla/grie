import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRangeComponent } from './slider-range.component';

describe('SliderRangeComponent', () => {
  let component: SliderRangeComponent;
  let fixture: ComponentFixture<SliderRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
