import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEngineersByProductComponent } from './get-engineers-by-product.component';

describe('GetEngineersByProductComponent', () => {
  let component: GetEngineersByProductComponent;
  let fixture: ComponentFixture<GetEngineersByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEngineersByProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEngineersByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
