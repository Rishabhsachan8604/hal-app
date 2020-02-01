import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSidebarComponent } from './production-sidebar.component';

describe('ProductionSidebarComponent', () => {
  let component: ProductionSidebarComponent;
  let fixture: ComponentFixture<ProductionSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
