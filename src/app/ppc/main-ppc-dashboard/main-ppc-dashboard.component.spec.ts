import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPpcDashboardComponent } from './main-ppc-dashboard.component';

describe('MainPpcDashboardComponent', () => {
  let component: MainPpcDashboardComponent;
  let fixture: ComponentFixture<MainPpcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPpcDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPpcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
