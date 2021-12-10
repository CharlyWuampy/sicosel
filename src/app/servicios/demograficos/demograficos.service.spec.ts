import { TestBed } from '@angular/core/testing';

import { DemograficosService } from './demograficos.service';

describe('DemograficosService', () => {
  let service: DemograficosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemograficosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
