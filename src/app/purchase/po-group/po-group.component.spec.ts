import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoGroupComponent } from './po-group.component';

describe('PoGroupComponent', () => {
  let component: PoGroupComponent;
  let fixture: ComponentFixture<PoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
