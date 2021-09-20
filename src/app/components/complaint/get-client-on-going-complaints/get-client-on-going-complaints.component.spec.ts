import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientOnGoingComplaintsComponent } from './get-client-on-going-complaints.component';

describe('GetClientOnGoingComplaintsComponent', () => {
  let component: GetClientOnGoingComplaintsComponent;
  let fixture: ComponentFixture<GetClientOnGoingComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientOnGoingComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientOnGoingComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
