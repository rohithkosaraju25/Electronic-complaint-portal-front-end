import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientReplacementRequestComplaintsComponent } from './get-client-replacement-request-complaints.component';

describe('GetClientReplacementRequestComplaintsComponent', () => {
  let component: GetClientReplacementRequestComplaintsComponent;
  let fixture: ComponentFixture<GetClientReplacementRequestComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientReplacementRequestComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientReplacementRequestComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
