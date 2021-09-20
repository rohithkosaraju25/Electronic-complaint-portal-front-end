import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductWarrantyComponent } from './update-product-warranty.component';

describe('UpdateProductWarrantyComponent', () => {
  let component: UpdateProductWarrantyComponent;
  let fixture: ComponentFixture<UpdateProductWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductWarrantyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
