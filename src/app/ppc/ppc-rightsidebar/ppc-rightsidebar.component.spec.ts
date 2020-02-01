import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRightsidebarComponent } from './ppc-rightsidebar.component';

describe('PpcRightsidebarComponent', () => {
  let component: PpcRightsidebarComponent;
  let fixture: ComponentFixture<PpcRightsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRightsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
