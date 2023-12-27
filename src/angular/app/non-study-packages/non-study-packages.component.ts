import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LearningPackageService, LearningPackage } from '../learning-package.service';

@Component({
  selector: 'app-non-study-packages',
  templateUrl: './non-study-packages.component.html',
  styleUrls: ['./non-study-packages.component.css']
})
export class NonStudyPackagesComponent {
  nonStudiedPackages: LearningPackage[] = [];

  constructor(
    private router: Router,
    private learningPackageService: LearningPackageService) {}

  ngOnInit(): void {
    this.nonStudiedPackages = this.learningPackageService.getNonActiveLearningPackages();
  }

  modifyPackage(id: number, event: Event): void {
    event.stopPropagation();
    console.log('Modify package with ID:', id);
  }
  deletePackage(id: number, event: Event): void {
    event.stopPropagation();
    this.learningPackageService.deletePackage(id);
    this.nonStudiedPackages = this.nonStudiedPackages.filter(p => p.id !== id);
  }
  addPackageToStudy(id: number, event: Event): void {
    event.stopPropagation();
    this.learningPackageService.addPackageToStudy(id);
    console.log('Add package to study with ID:', id);
    this.router.navigate(['/']); // Navigate to home page
  }
}
