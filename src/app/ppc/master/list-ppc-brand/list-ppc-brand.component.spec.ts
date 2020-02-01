import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPpcBrandComponent } from './list-ppc-brand.component';

describe('ListPpcBrandComponent', () => {
  let component: ListPpcBrandComponent;
  let fixture: ComponentFixture<ListPpcBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPpcBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPpcBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
