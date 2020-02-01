import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcSubGroupComponent } from './add-ppc-sub-group.component';

describe('AddPpcSubGroupComponent', () => {
  let component: AddPpcSubGroupComponent;
  let fixture: ComponentFixture<AddPpcSubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcSubGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
