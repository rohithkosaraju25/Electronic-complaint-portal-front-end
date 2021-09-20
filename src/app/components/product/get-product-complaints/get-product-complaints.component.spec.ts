import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductComplaintsComponent } from './get-product-complaints.component';

describe('GetProductComplaintsComponent', () => {
  let component: GetProductComplaintsComponent;
  let fixture: ComponentFixture<GetProductComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
