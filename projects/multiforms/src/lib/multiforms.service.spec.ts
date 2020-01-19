import { TestBed } from '@angular/core/testing';

import { MultiformsService } from './multiforms.service';

describe('MultiformsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiformsService = TestBed.get(MultiformsService);
    expect(service).toBeTruthy();
  });
});
