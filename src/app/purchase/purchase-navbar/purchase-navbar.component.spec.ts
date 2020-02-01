import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNavbarComponent } from './purchase-navbar.component';

describe('PurchaseNavbarComponent', () => {
  let component: PurchaseNavbarComponent;
  let fixture: ComponentFixture<PurchaseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
