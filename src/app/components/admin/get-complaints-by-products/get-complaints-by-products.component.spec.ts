import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintsByProductsComponent } from './get-complaints-by-products.component';

describe('GetComplaintsByProductsComponent', () => {
  let component: GetComplaintsByProductsComponent;
  let fixture: ComponentFixture<GetComplaintsByProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintsByProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplaintsByProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
