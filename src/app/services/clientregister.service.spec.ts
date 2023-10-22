import { TestBed } from '@angular/core/testing';

import { ClientregisterService } from './clientregister.service';

describe('ClientregisterService', () => {
  let service: ClientregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
