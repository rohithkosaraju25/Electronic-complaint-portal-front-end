import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReplaceRequestComplaintsComponent } from './get-replace-request-complaints.component';

describe('GetReplaceRequestComplaintsComponent', () => {
  let component: GetReplaceRequestComplaintsComponent;
  let fixture: ComponentFixture<GetReplaceRequestComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReplaceRequestComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReplaceRequestComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
