import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByComplaintIdComponent } from './get-product-by-complaint-id.component';

describe('GetProductByComplaintIdComponent', () => {
  let component: GetProductByComplaintIdComponent;
  let fixture: ComponentFixture<GetProductByComplaintIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductByComplaintIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductByComplaintIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
