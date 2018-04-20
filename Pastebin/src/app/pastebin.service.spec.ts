import { TestBed, inject } from '@angular/core/testing';
import { PastebinService } from './pastebin.service';
import { HttpModule } from '@angular/http';

describe('PastebinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastebinService],
      imports: [ HttpModule]
    });
  });

  it('should be created', inject([PastebinService], (service: PastebinService) => {
    expect(service).toBeTruthy();
  }));
});
