import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPpcAllUnitComponent } from './list-ppc-all-unit.component';

describe('ListPpcAllUnitComponent', () => {
  let component: ListPpcAllUnitComponent;
  let fixture: ComponentFixture<ListPpcAllUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPpcAllUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPpcAllUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
