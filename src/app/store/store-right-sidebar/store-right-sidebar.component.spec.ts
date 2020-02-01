import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRightSidebarComponent } from './store-right-sidebar.component';

describe('StoreRightSidebarComponent', () => {
  let component: StoreRightSidebarComponent;
  let fixture: ComponentFixture<StoreRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
