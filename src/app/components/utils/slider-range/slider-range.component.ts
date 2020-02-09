import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.css']
})
export class SliderRangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  minValue: number = 0;
  maxValue: number = 10;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value +'%' ;
        case LabelType.High:
          return value + '%';
        default:
          return  value +'%';
      }
    }
  };

}
