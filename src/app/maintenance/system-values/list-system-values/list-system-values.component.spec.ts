import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSystemValuesComponent } from './list-system-values.component';

describe('ListSystemValuesComponent', () => {
  let component: ListSystemValuesComponent;
  let fixture: ComponentFixture<ListSystemValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSystemValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSystemValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
