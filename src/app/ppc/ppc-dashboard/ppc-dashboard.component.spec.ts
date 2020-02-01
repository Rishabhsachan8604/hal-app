import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcDashboardComponent } from './ppc-dashboard.component';

describe('PpcDashboardComponent', () => {
  let component: PpcDashboardComponent;
  let fixture: ComponentFixture<PpcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
