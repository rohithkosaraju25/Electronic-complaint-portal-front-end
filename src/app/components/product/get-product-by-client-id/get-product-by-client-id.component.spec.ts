import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByClientIdComponent } from './get-product-by-client-id.component';

describe('GetProductByClientIdComponent', () => {
  let component: GetProductByClientIdComponent;
  let fixture: ComponentFixture<GetProductByClientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductByClientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductByClientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
