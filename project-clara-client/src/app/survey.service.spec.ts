import { TestBed, inject } from '@angular/core/testing';

import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyService]
    });
  });

  it('should be created', inject([SurveyService], (service: SurveyService) => {
    expect(service).toBeTruthy();
  }));
});
