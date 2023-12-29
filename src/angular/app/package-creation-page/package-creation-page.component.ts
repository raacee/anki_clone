import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LearningPackageService, LearningPackage } from '../learning-package.service';

@Component({
  selector: 'app-package-creation-page',
  templateUrl: './package-creation-page.component.html',
  styleUrls: ['./package-creation-page.component.css']
})
export class PackageCreationPageComponent {
  packageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private learningPackageService: LearningPackageService
  ) {
    this.packageForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      category: ['', Validators.required],
      difficultyLevel: [1, [Validators.required, Validators.min(1), Validators.max(20)]]
    });
  }
/*addPackage(newPackage: LearningPackage): Promise<void> {
    return fetch('/api/learningpackages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPackage)
    })
    .then(response => response.json())
    .then(data => console.log('Package added:', data))
    .catch(error => console.error('Error adding package:', error));
}
*/
  onSubmit() {
    if (this.packageForm.valid) {
      const newPackage: LearningPackage = {
        id: this.learningPackageService.getNextId(),
      //id: await this.getNextId(),
        title: this.packageForm.value.title,
        description: this.packageForm.value.desc,
        category: this.packageForm.value.category,
        difficultyLevel: this.packageForm.value.difficultyLevel,
        startDate: null,
        expectedEndDate: null,
        questions: [],
        isAchieved: false
      };
      this.learningPackageService.addPackage(newPackage);
    //await this.addPackage(newPackage);
      this.router.navigate(['/non-study-packages']);
    }
  }
}