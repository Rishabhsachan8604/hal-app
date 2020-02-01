import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSidebarComponent } from './finance-sidebar.component';

describe('FinanceSidebarComponent', () => {
  let component: FinanceSidebarComponent;
  let fixture: ComponentFixture<FinanceSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
