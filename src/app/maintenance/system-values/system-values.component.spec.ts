import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemValuesComponent } from './system-values.component';

describe('SystemValuesComponent', () => {
  let component: SystemValuesComponent;
  let fixture: ComponentFixture<SystemValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
