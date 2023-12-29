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

  onSubmit() {
    if (this.packageForm.valid) {
      const newPackage: LearningPackage = {
        id: this.learningPackageService.getNextId(),
        title: this.packageForm.value.title,
        description: this.packageForm.value.desc,
        category: this.packageForm.value.category,
        difficultyLevel: this.packageForm.value.difficultyLevel,
        questions: [],
        isAchieved: false
      };
      this.learningPackageService.addPackage(newPackage);
      this.router.navigate(['/non-study-packages']);
    }
  }
}