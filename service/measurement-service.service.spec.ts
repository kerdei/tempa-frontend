import { TestBed } from '@angular/core/testing';

import { MeasurementServiceService } from './measurement-service.service';

describe('MeasurementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeasurementServiceService = TestBed.get(MeasurementServiceService);
    expect(service).toBeTruthy();
  });
});
