import { TestBed } from '@angular/core/testing';

import { JuridicosService } from './juridicos.service';

describe('JuridicosService', () => {
  let service: JuridicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuridicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
