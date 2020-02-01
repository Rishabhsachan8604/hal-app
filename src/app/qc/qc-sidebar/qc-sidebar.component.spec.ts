import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcSidebarComponent } from './qc-sidebar.component';

describe('QcSidebarComponent', () => {
  let component: QcSidebarComponent;
  let fixture: ComponentFixture<QcSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
