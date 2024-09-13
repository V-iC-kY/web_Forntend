import { TestBed } from '@angular/core/testing';

import { MessageingService } from './messageing.service';

describe('MessageingService', () => {
  let service: MessageingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
