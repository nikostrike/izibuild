import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedBuildComponent } from './suggested-build.component';

describe('SuggestedBuildComponent', () => {
  let component: SuggestedBuildComponent;
  let fixture: ComponentFixture<SuggestedBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
