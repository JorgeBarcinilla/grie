import { TestBed } from '@angular/core/testing';

import { CaracterizacionContextoService } from './caracterizacion-contexto.service';

describe('CaracterizacionContextoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracterizacionContextoService = TestBed.get(CaracterizacionContextoService);
    expect(service).toBeTruthy();
  });
});
