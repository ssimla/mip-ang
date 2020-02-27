import { TestBed } from '@angular/core/testing';

import { RaportKategoriaService } from './raport-kategoria.service';

describe('RaportKategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaportKategoriaService = TestBed.get(RaportKategoriaService);
    expect(service).toBeTruthy();
  });
});
