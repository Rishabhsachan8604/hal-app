import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcSubCategoryComponent } from './add-ppc-sub-category.component';

describe('AddPpcSubCategoryComponent', () => {
  let component: AddPpcSubCategoryComponent;
  let fixture: ComponentFixture<AddPpcSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
