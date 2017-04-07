import { TestBed, inject } from '@angular/core/testing';

import { ActivtiesService } from './activty.service';

describe('ActivtiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivtiesService]
    });
  });

  it('should ...', inject([ActivtiesService], (service: ActivtiesService) => {
    expect(service).toBeTruthy();
  }));
});
