import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByProductCategoryNameComponent } from './get-by-product-category-name.component';

describe('GetByProductCategoryNameComponent', () => {
  let component: GetByProductCategoryNameComponent;
  let fixture: ComponentFixture<GetByProductCategoryNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByProductCategoryNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByProductCategoryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
