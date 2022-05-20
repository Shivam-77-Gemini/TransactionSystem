import { TestBed } from '@angular/core/testing';

import { UseTransactionService } from './use-transaction.service';

describe('UseTransactionService', () => {
  let service: UseTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
