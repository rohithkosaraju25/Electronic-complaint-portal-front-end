import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByModelNumberComponent } from './find-by-model-number.component';

describe('FindByModelNumberComponent', () => {
  let component: FindByModelNumberComponent;
  let fixture: ComponentFixture<FindByModelNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByModelNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByModelNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
