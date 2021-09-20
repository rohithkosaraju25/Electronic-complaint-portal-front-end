import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientAllOpenComplaintsComponent } from './get-client-all-open-complaints.component';

describe('GetClientAllOpenComplaintsComponent', () => {
  let component: GetClientAllOpenComplaintsComponent;
  let fixture: ComponentFixture<GetClientAllOpenComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientAllOpenComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientAllOpenComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
