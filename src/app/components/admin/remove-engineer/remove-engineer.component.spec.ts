import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEngineerComponent } from './remove-engineer.component';

describe('RemoveEngineerComponent', () => {
  let component: RemoveEngineerComponent;
  let fixture: ComponentFixture<RemoveEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
