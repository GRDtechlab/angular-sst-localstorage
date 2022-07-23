import { TestBed } from '@angular/core/testing';

import { LocalStorageManagementSsrService } from './local-storage-management-ssr.service';

describe('LocalStorageManagementSsrService', () => {
  let service: LocalStorageManagementSsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageManagementSsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
