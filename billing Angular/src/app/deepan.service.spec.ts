import { TestBed } from '@angular/core/testing';

import { DeepanService } from './deepan.service';

describe('DeepanService', () => {
  let service: DeepanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
