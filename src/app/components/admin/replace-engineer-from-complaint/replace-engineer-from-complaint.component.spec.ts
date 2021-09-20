import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceEngineerFromComplaintComponent } from './replace-engineer-from-complaint.component';

describe('ReplaceEngineerFromComplaintComponent', () => {
  let component: ReplaceEngineerFromComplaintComponent;
  let fixture: ComponentFixture<ReplaceEngineerFromComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceEngineerFromComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceEngineerFromComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
