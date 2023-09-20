import { TestBed } from '@angular/core/testing';

import { GetGameDataService } from './get-game-data.service';

describe('GetGameDataService', () => {
  let service: GetGameDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
