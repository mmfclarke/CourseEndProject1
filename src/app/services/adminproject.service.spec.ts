import { TestBed } from '@angular/core/testing';

import { AdminprojectService } from './adminproject.service';

describe('AdminprojectService', () => {
  let service: AdminprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
