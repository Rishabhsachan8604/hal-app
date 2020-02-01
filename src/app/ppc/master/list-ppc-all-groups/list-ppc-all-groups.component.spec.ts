import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPpcAllGroupsComponent } from './list-ppc-all-groups.component';

describe('ListPpcAllGroupsComponent', () => {
  let component: ListPpcAllGroupsComponent;
  let fixture: ComponentFixture<ListPpcAllGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPpcAllGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPpcAllGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
