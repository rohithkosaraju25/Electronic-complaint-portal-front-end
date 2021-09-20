import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEngineerByDomainComponent } from './get-engineer-by-domain.component';

describe('GetEngineerByDomainComponent', () => {
  let component: GetEngineerByDomainComponent;
  let fixture: ComponentFixture<GetEngineerByDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEngineerByDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEngineerByDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
