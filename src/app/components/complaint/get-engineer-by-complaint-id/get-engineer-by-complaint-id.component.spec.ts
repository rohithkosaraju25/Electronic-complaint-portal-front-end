import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEngineerByComplaintIdComponent } from './get-engineer-by-complaint-id.component';

describe('GetEngineerByComplaintIdComponent', () => {
  let component: GetEngineerByComplaintIdComponent;
  let fixture: ComponentFixture<GetEngineerByComplaintIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEngineerByComplaintIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEngineerByComplaintIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
