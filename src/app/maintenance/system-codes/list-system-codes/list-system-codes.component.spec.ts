import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSystemCodesComponent } from './list-system-codes.component';

describe('ListSystemCodesComponent', () => {
  let component: ListSystemCodesComponent;
  let fixture: ComponentFixture<ListSystemCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSystemCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSystemCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
