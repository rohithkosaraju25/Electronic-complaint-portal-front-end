import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResolvedComplaintsComponent } from './get-resolved-complaints.component';

describe('GetResolvedComplaintsComponent', () => {
  let component: GetResolvedComplaintsComponent;
  let fixture: ComponentFixture<GetResolvedComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetResolvedComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResolvedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
