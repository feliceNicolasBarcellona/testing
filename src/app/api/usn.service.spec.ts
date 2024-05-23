import { TestBed } from '@angular/core/testing';

import { UsnService } from './usn.service';

describe('UsnService', () => {
  let service: UsnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
