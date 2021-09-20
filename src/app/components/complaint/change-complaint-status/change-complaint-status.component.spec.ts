import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeComplaintStatusComponent } from './change-complaint-status.component';

describe('ChangeComplaintStatusComponent', () => {
  let component: ChangeComplaintStatusComponent;
  let fixture: ComponentFixture<ChangeComplaintStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeComplaintStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeComplaintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
