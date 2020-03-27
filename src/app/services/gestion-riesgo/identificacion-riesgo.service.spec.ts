import { TestBed } from '@angular/core/testing';

import { IdentificacionRiesgoService } from './identificacion-riesgo.service';

describe('IdentificacionRiesgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentificacionRiesgoService = TestBed.get(IdentificacionRiesgoService);
    expect(service).toBeTruthy();
  });
});
