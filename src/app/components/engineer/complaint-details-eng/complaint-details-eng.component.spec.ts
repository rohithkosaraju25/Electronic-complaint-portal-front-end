import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDetailsEngComponent } from './complaint-details-eng.component';

describe('ComplaintDetailsEngComponent', () => {
  let component: ComplaintDetailsEngComponent;
  let fixture: ComponentFixture<ComplaintDetailsEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintDetailsEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintDetailsEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
