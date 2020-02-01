import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceNavbarComponent } from './finance-navbar.component';

describe('FinanceNavbarComponent', () => {
  let component: FinanceNavbarComponent;
  let fixture: ComponentFixture<FinanceNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
