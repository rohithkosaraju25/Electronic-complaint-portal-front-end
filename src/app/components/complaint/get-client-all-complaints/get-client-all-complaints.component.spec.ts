import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientAllComplaintsComponent } from './get-client-all-complaints.component';

describe('GetClientAllComplaintsComponent', () => {
  let component: GetClientAllComplaintsComponent;
  let fixture: ComponentFixture<GetClientAllComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientAllComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientAllComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
