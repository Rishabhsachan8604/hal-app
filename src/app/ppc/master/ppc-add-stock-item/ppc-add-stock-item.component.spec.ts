import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcAddStockItemComponent } from './ppc-add-stock-item.component';

describe('PpcAddStockItemComponent', () => {
  let component: PpcAddStockItemComponent;
  let fixture: ComponentFixture<PpcAddStockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcAddStockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcAddStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
