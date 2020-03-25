import { TestBed } from '@angular/core/testing';

import { LineamientoPoliticaRiesgoService } from './lineamiento-politica-riesgo.service';

describe('LineamientoPoliticaRiesgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineamientoPoliticaRiesgoService = TestBed.get(LineamientoPoliticaRiesgoService);
    expect(service).toBeTruthy();
  });
});
