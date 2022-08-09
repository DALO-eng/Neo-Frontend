import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageFeaturesComponent } from './landing-page-features.component';

describe('LandingPageFeaturesComponent', () => {
  let component: LandingPageFeaturesComponent;
  let fixture: ComponentFixture<LandingPageFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
