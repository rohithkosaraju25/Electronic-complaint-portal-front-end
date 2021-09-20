import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintsByProductcategoryComponent } from './get-complaints-by-productcategory.component';

describe('GetComplaintsByProductcategoryComponent', () => {
  let component: GetComplaintsByProductcategoryComponent;
  let fixture: ComponentFixture<GetComplaintsByProductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintsByProductcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplaintsByProductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
