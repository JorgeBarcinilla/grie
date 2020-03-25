import { TestBed } from '@angular/core/testing';

import { InstitucionService } from './institucion.service';

describe('InstitucionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstitucionService = TestBed.get(InstitucionService);
    expect(service).toBeTruthy();
  });
});
