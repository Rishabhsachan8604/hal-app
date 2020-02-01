import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRightSidebarComponent } from './purchase-right-sidebar.component';

describe('PurchaseRightSidebarComponent', () => {
  let component: PurchaseRightSidebarComponent;
  let fixture: ComponentFixture<PurchaseRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
