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

    async ngOnInit(): Promise<void> {
      this.nonStudiedPackages = await this.getNonActiveLearningPackages();
  }

  async getNonActiveLearningPackages(): Promise<LearningPackage[]> {
    const response =  await fetch('/api/non-study-packages')
    const text = await response.text()
    return JSON.parse(text)
}

  modifyPackage(id: number, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/learning-facts-page', id]);
  }
  deletePackage(id: number, event: Event): void {
    event.stopPropagation();
    this.learningPackageService.deletePackage(id);
    this.nonStudiedPackages = this.nonStudiedPackages.filter(p => p.id !== id);
  }
  /*
  deletePackage(id: number): void {
    fetch(`/api/learningpackages/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => {
            console.log(`Package ${id} deleted`);
            // Update the local state or refresh the list from the backend
        })
        .catch(error => console.error('Error deleting package:', error));
}
*/
  addPackageToStudy(id: number, event: Event): void {
    event.stopPropagation();
    this.learningPackageService.addPackageToStudy(id);
    console.log('Add package to study with ID:', id);
    this.router.navigate(['/']); // Navigate to home page
  }
}
