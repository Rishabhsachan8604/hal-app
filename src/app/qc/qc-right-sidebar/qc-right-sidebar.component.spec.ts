import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcRightSidebarComponent } from './qc-right-sidebar.component';

describe('QcRightSidebarComponent', () => {
  let component: QcRightSidebarComponent;
  let fixture: ComponentFixture<QcRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
