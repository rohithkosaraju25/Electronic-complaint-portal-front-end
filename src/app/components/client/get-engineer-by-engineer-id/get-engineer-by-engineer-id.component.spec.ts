import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEngineerByEngineerIdComponent } from './get-engineer-by-engineer-id.component';

describe('GetEngineerByEngineerIdComponent', () => {
  let component: GetEngineerByEngineerIdComponent;
  let fixture: ComponentFixture<GetEngineerByEngineerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEngineerByEngineerIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEngineerByEngineerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
