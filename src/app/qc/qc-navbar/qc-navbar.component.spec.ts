import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcNavbarComponent } from './qc-navbar.component';

describe('QcNavbarComponent', () => {
  let component: QcNavbarComponent;
  let fixture: ComponentFixture<QcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
