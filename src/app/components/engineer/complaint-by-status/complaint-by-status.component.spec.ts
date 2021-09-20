import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintByStatusComponent } from './complaint-by-status.component';

describe('ComplaintByStatusComponent', () => {
  let component: ComplaintByStatusComponent;
  let fixture: ComponentFixture<ComplaintByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintByStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
