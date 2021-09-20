import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEngineersByProductCategoryNameComponent } from './get-engineers-by-product-category-name.component';

describe('GetEngineersByProductCategoryNameComponent', () => {
  let component: GetEngineersByProductCategoryNameComponent;
  let fixture: ComponentFixture<GetEngineersByProductCategoryNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEngineersByProductCategoryNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEngineersByProductCategoryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
