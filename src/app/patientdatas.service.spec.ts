import { TestBed } from '@angular/core/testing';

import { PatientdatasService } from './patientdatas.service';

describe('PatientdatasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientdatasService = TestBed.get(PatientdatasService);
    expect(service).toBeTruthy();
  });
});
