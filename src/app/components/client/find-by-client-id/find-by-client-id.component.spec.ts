import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByClientIdComponent } from './find-by-client-id.component';

describe('FindByClientIdComponent', () => {
  let component: FindByClientIdComponent;
  let fixture: ComponentFixture<FindByClientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByClientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByClientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
