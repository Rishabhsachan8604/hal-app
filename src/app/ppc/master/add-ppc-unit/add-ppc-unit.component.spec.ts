import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcUnitComponent } from './add-ppc-unit.component';

describe('AddPpcUnitComponent', () => {
  let component: AddPpcUnitComponent;
  let fixture: ComponentFixture<AddPpcUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
