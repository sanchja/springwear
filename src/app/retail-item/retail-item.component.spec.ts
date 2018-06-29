import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailItemComponent } from './retail-item.component';

describe('RetailItemComponent', () => {
  let component: RetailItemComponent;
  let fixture: ComponentFixture<RetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
