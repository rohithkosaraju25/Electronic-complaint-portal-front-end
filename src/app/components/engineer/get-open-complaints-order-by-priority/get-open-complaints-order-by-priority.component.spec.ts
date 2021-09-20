import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOpenComplaintsOrderByPriorityComponent } from './get-open-complaints-order-by-priority.component';

describe('GetOpenComplaintsOrderByPriorityComponent', () => {
  let component: GetOpenComplaintsOrderByPriorityComponent;
  let fixture: ComponentFixture<GetOpenComplaintsOrderByPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOpenComplaintsOrderByPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOpenComplaintsOrderByPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
