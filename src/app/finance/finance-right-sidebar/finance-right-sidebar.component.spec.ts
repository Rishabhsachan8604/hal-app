import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRightSidebarComponent } from './finance-right-sidebar.component';

describe('FinanceRightSidebarComponent', () => {
  let component: FinanceRightSidebarComponent;
  let fixture: ComponentFixture<FinanceRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
