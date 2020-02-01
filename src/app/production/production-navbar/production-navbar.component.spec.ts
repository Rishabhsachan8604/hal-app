import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionNavbarComponent } from './production-navbar.component';

describe('ProductionNavbarComponent', () => {
  let component: ProductionNavbarComponent;
  let fixture: ComponentFixture<ProductionNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
