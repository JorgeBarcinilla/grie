/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EjecucionRecuperacionService } from './ejecucionRecuperacion.service';

describe('Service: EjecucionRecuperacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjecucionRecuperacionService]
    });
  });

  it('should ...', inject([EjecucionRecuperacionService], (service: EjecucionRecuperacionService) => {
    expect(service).toBeTruthy();
  }));
});
