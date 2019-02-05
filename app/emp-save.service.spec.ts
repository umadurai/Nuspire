import { TestBed } from '@angular/core/testing';

import { EmpSaveService } from './emp-save.service';

describe('EmpSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpSaveService = TestBed.get(EmpSaveService);
    expect(service).toBeTruthy();
  });
});
