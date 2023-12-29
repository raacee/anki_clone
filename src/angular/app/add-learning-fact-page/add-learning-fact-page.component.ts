import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningPackageService, LearningFact } from '../learning-package.service';

@Component({
  selector: 'app-add-learning-fact-page',
  templateUrl: './add-learning-fact-page.component.html',
  styleUrls: ['./add-learning-fact-page.component.css']
})

export class AddLearningFactPageComponent implements OnInit {
  factForm: FormGroup;
  packageId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private learningPackageService: LearningPackageService
  ) {
    this.factForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.packageId = +params.get('packageId')!;

      if (isNaN(this.packageId)) {
        console.error('Invalid package ID');
        this.router.navigate(['/']);
      }
    });
  }  onSubmit() {
    if (this.factForm.valid) {
      const pkg = this.learningPackageService.getPackageById(this.packageId);

      if (pkg) 
      {
        const newFactId = pkg.questions.reduce((max, fact) => fact.id > max ? fact.id : max, 0) + 1; //if no fact ==> 0+1 = 1
                                                                                                     //if facts, ==> last index +1
        const newFact: LearningFact = {
          id: newFactId,
          question: this.factForm.value.question,
          answer: this.factForm.value.answer
        };
        this.learningPackageService.addFactToPackage(this.packageId, newFact);
        this.router.navigate(['/learning-facts-page', this.packageId]);
      }
      else
      {
        console.error('Package not found');
        this.router.navigate(['/']);
      }
    }
  }
}
