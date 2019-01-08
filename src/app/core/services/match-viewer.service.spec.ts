import { TestBed } from '@angular/core/testing';

import { MatchViewerService } from './match-viewer.service';

describe('MatchViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchViewerService = TestBed.get(MatchViewerService);
    expect(service).toBeTruthy();
  });
});
