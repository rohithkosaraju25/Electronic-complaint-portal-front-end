import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientByClientIdComponent } from './get-client-by-client-id.component';

describe('GetClientByClientIdComponent', () => {
  let component: GetClientByClientIdComponent;
  let fixture: ComponentFixture<GetClientByClientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientByClientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientByClientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
