import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLearningPackagesComponent } from './all-learning-packages.component';

describe('AllLearningPackagesComponent', () => {
  let component: AllLearningPackagesComponent;
  let fixture: ComponentFixture<AllLearningPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllLearningPackagesComponent]
    });
    fixture = TestBed.createComponent(AllLearningPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
