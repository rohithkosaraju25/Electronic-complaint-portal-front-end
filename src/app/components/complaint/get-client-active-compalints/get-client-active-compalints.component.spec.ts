import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientActiveCompalintsComponent } from './get-client-active-compalints.component';

describe('GetClientActiveCompalintsComponent', () => {
  let component: GetClientActiveCompalintsComponent;
  let fixture: ComponentFixture<GetClientActiveCompalintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientActiveCompalintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientActiveCompalintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
