import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPpcAllCategoryComponent } from './list-ppc-all-category.component';

describe('ListPpcAllCategoryComponent', () => {
  let component: ListPpcAllCategoryComponent;
  let fixture: ComponentFixture<ListPpcAllCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPpcAllCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPpcAllCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
