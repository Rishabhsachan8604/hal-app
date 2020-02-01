import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionRightSidebarComponent } from './production-right-sidebar.component';

describe('ProductionRightSidebarComponent', () => {
  let component: ProductionRightSidebarComponent;
  let fixture: ComponentFixture<ProductionRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
