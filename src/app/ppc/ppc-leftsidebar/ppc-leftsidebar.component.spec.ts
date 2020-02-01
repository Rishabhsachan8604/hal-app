import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcLeftsidebarComponent } from './ppc-leftsidebar.component';

describe('PpcLeftsidebarComponent', () => {
  let component: PpcLeftsidebarComponent;
  let fixture: ComponentFixture<PpcLeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcLeftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcLeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
