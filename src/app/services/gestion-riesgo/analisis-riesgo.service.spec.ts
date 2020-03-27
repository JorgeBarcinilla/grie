import { TestBed } from '@angular/core/testing';

import { AnalisisRiesgoService } from './analisis-riesgo.service';

describe('AnalisisRiesgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalisisRiesgoService = TestBed.get(AnalisisRiesgoService);
    expect(service).toBeTruthy();
  });
});
