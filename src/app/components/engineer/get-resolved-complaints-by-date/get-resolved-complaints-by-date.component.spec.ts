import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResolvedComplaintsByDateComponent } from './get-resolved-complaints-by-date.component';

describe('GetResolvedComplaintsByDateComponent', () => {
  let component: GetResolvedComplaintsByDateComponent;
  let fixture: ComponentFixture<GetResolvedComplaintsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetResolvedComplaintsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResolvedComplaintsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
