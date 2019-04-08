import { TestBed, async, inject } from '@angular/core/testing';

import { BannedUsers } from './bannedUsers.guard';

describe('NotAllowedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannedUsers]
    });
  });

  it('should ...', inject([BannedUsers], (guard: BannedUsers) => {
    expect(guard).toBeTruthy();
  }));
});