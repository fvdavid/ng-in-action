import { TestBed } from '@angular/core/testing';

import { NarutoDbService } from './naruto-db.service';

describe('NarutoDbService', () => {
  let service: NarutoDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarutoDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
