import { TestBed } from '@angular/core/testing';

import { ProductroutesService } from './productroutes.service';

describe('ProductroutesService', () => {
  let service: ProductroutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductroutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
