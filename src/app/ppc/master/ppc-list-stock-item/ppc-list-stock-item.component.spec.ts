import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcListStockItemComponent } from './ppc-list-stock-item.component';

describe('PpcListStockItemComponent', () => {
  let component: PpcListStockItemComponent;
  let fixture: ComponentFixture<PpcListStockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcListStockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcListStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
