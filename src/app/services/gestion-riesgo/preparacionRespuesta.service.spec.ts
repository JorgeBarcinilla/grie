/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreparacionRespuestaService } from './preparacionRespuesta.service';

describe('Service: PreparacionRespuesta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreparacionRespuestaService]
    });
  });

  it('should ...', inject([PreparacionRespuestaService], (service: PreparacionRespuestaService) => {
    expect(service).toBeTruthy();
  }));
});
