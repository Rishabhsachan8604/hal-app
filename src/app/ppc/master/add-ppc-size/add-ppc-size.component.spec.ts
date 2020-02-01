import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcSizeComponent } from './add-ppc-size.component';

describe('AddPpcSizeComponent', () => {
  let component: AddPpcSizeComponent;
  let fixture: ComponentFixture<AddPpcSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
