import { TestBed } from '@angular/core/testing';

import { MeetingrequestService } from './meetingrequest.service';

describe('MeetingrequestService', () => {
  let service: MeetingrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
