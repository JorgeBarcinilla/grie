import { TestBed } from '@angular/core/testing';

import { EvaluacionRiesgosService } from './evaluacion-riesgos.service';

describe('EvaluacionRiesgosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluacionRiesgosService = TestBed.get(EvaluacionRiesgosService);
    expect(service).toBeTruthy();
  });
});
