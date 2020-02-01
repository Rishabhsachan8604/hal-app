import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPpcSizeComponent } from './list-ppc-size.component';

describe('ListPpcSizeComponent', () => {
  let component: ListPpcSizeComponent;
  let fixture: ComponentFixture<ListPpcSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPpcSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPpcSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
