import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintsByStatusEngComponent } from './get-complaints-by-status-eng.component';

describe('GetComplaintsByStatusEngComponent', () => {
  let component: GetComplaintsByStatusEngComponent;
  let fixture: ComponentFixture<GetComplaintsByStatusEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintsByStatusEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplaintsByStatusEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
