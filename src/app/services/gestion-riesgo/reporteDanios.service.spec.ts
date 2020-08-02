/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReporteDaniosService } from './reporteDanios.service';

describe('Service: ReporteDanios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteDaniosService]
    });
  });

  it('should ...', inject([ReporteDaniosService], (service: ReporteDaniosService) => {
    expect(service).toBeTruthy();
  }));
});
