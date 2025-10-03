import { TestBed } from '@angular/core/testing';

import { MenuRefreshService } from './menu-refresh.service';

describe('MenuRefreshService', () => {
  let service: MenuRefreshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuRefreshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
