import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceEngineerComponent } from './replace-engineer.component';

describe('ReplaceEngineerComponent', () => {
  let component: ReplaceEngineerComponent;
  let fixture: ComponentFixture<ReplaceEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
