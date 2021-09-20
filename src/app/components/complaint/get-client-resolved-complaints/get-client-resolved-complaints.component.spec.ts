import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientResolvedComplaintsComponent } from './get-client-resolved-complaints.component';

describe('GetClientResolvedComplaintsComponent', () => {
  let component: GetClientResolvedComplaintsComponent;
  let fixture: ComponentFixture<GetClientResolvedComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientResolvedComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientResolvedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
