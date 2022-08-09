import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMembersComponent } from './landing-page-members.component';

describe('LandingPageMembersComponent', () => {
  let component: LandingPageMembersComponent;
  let fixture: ComponentFixture<LandingPageMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
