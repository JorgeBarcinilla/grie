import { TestBed } from '@angular/core/testing';

import { ReporteTratamientoRiesgoService } from './reporte-tratamiento-riesgo.service';

describe('ReporteTratamientoRiesgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReporteTratamientoRiesgoService = TestBed.get(ReporteTratamientoRiesgoService);
    expect(service).toBeTruthy();
  });
});
