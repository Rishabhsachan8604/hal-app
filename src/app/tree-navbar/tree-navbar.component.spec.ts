import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNavbarComponent } from './tree-navbar.component';

describe('TreeNavbarComponent', () => {
  let component: TreeNavbarComponent;
  let fixture: ComponentFixture<TreeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
