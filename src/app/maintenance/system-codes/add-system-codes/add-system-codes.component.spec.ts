import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemCodesComponent } from './add-system-codes.component';

describe('AddSystemCodesComponent', () => {
  let component: AddSystemCodesComponent;
  let fixture: ComponentFixture<AddSystemCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSystemCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
