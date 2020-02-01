import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChartOfAccountsComponent } from './master-chart-of-accounts.component';

describe('MasterChartOfAccountsComponent', () => {
  let component: MasterChartOfAccountsComponent;
  let fixture: ComponentFixture<MasterChartOfAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterChartOfAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterChartOfAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
