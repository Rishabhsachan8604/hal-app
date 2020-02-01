import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcLoginComponent } from './ppc-login.component';

describe('PpcLoginComponent', () => {
  let component: PpcLoginComponent;
  let fixture: ComponentFixture<PpcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
