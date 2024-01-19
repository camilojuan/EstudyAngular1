import { TestBed } from '@angular/core/testing';

import { ChampionRotationsService } from './champion-rotations.service';

describe('ChampionRotationsService', () => {
  let service: ChampionRotationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionRotationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
