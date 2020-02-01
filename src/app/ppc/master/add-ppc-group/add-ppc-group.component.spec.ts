import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcGroupComponent } from './add-ppc-group.component';

describe('AddPpcGroupComponent', () => {
  let component: AddPpcGroupComponent;
  let fixture: ComponentFixture<AddPpcGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
