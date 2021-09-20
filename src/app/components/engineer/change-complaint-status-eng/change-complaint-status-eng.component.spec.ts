import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeComplaintStatusEngComponent } from './change-complaint-status-eng.component';

describe('ChangeComplaintStatusEngComponent', () => {
  let component: ChangeComplaintStatusEngComponent;
  let fixture: ComponentFixture<ChangeComplaintStatusEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeComplaintStatusEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeComplaintStatusEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
