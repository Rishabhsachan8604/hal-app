import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceMasterComponent } from './finance-master.component';

describe('FinanceMasterComponent', () => {
  let component: FinanceMasterComponent;
  let fixture: ComponentFixture<FinanceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
