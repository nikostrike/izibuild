import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsContainerComponent } from './builds-container.component';

describe('BuildsContainerComponent', () => {
  let component: BuildsContainerComponent;
  let fixture: ComponentFixture<BuildsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
