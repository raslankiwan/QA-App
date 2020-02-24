import { TestBed } from '@angular/core/testing';

import { FetchTopicsService } from './fetch-topics.service';

describe('FetchTopicsService', () => {
  let service: FetchTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
