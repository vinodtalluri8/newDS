import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCodesComponent } from './system-codes.component';

describe('SystemCodesComponent', () => {
  let component: SystemCodesComponent;
  let fixture: ComponentFixture<SystemCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
