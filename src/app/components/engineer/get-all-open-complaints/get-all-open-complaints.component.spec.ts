import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOpenComplaintsComponent } from './get-all-open-complaints.component';

describe('GetAllOpenComplaintsComponent', () => {
  let component: GetAllOpenComplaintsComponent;
  let fixture: ComponentFixture<GetAllOpenComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllOpenComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllOpenComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
