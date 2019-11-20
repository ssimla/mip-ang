import { TestBed } from '@angular/core/testing';

import { SalesChartService } from './sales-chart.service';

describe('SalesChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesChartService = TestBed.get(SalesChartService);
    expect(service).toBeTruthy();
  });
});
