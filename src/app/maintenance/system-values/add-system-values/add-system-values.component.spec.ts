import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemValuesComponent } from './add-system-values.component';

describe('AddSystemValuesComponent', () => {
  let component: AddSystemValuesComponent;
  let fixture: ComponentFixture<AddSystemValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSystemValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
