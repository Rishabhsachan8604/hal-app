import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcCategoryComponent } from './add-ppc-category.component';

describe('AddPpcCategoryComponent', () => {
  let component: AddPpcCategoryComponent;
  let fixture: ComponentFixture<AddPpcCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
