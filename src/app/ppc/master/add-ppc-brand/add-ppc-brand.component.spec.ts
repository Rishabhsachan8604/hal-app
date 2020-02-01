import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpcBrandComponent } from './add-ppc-brand.component';

describe('AddPpcBrandComponent', () => {
  let component: AddPpcBrandComponent;
  let fixture: ComponentFixture<AddPpcBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPpcBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPpcBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
