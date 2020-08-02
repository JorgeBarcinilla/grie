/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValoracionSituacionService } from './valoracion-situacion.service';

describe('Service: ValoracionSituacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValoracionSituacionService]
    });
  });

  it('should ...', inject([ValoracionSituacionService], (service: ValoracionSituacionService) => {
    expect(service).toBeTruthy();
  }));
});
