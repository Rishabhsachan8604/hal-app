import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcNavbarComponent } from './ppc-navbar.component';

describe('PpcNavbarComponent', () => {
  let component: PpcNavbarComponent;
  let fixture: ComponentFixture<PpcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
