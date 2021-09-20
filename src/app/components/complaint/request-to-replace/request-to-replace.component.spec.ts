import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToReplaceComponent } from './request-to-replace.component';

describe('RequestToReplaceComponent', () => {
  let component: RequestToReplaceComponent;
  let fixture: ComponentFixture<RequestToReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestToReplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestToReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
