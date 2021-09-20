import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEngineersComponent } from './all-engineers.component';

describe('AllEngineersComponent', () => {
  let component: AllEngineersComponent;
  let fixture: ComponentFixture<AllEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEngineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
