import { TestBed } from '@angular/core/testing';

import { ChangeSedeService } from './change-sede.service';

describe('ChangeSedeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeSedeService = TestBed.get(ChangeSedeService);
    expect(service).toBeTruthy();
  });
});
