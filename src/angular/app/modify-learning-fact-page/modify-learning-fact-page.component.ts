import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningPackageService, LearningPackage, LearningFact } from '../learning-package.service';

@Component({
    selector: 'app-modify-learning-fact-page',
    templateUrl: './modify-learning-fact-page.component.html',
    styleUrls: ['./modify-learning-fact-page.component.css']
})
export class ModifyLearningFactPageComponent implements OnInit {
    factForm: FormGroup;
    currentFact?: LearningFact;
    packageId: number;
    factId: number;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private learningPackageService: LearningPackageService
    ) {
        this.packageId = +this.route.snapshot.params['packageId'];
        this.factId = +this.route.snapshot.params['factId'];

        this.factForm = this.fb.group({
            question: ['', Validators.required],
            answer: ['', Validators.required]
        });
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.packageId = +params.get('packageId')!;
        this.factId = +params.get('factId')!;
        this.loadCurrentFact();
      });
    }

    loadCurrentFact() {
        const pkg: LearningPackage | undefined = this.learningPackageService.getPackageById(this.packageId);
        this.currentFact = pkg?.questions.find(fact => fact.id === this.factId);
        
        if (this.currentFact) {
            this.factForm.patchValue({
                question: this.currentFact.question,
                answer: this.currentFact.answer
            });
        } else {
            this.router.navigate(['/']); // Back to home just in case
        }
    }

    /*
    modifyFact(packageId: number, updatedFact: LearningFact): void {
    fetch(`/api/learningpackages/${packageId}/facts/${updatedFact.id}`, {
        method: 'PUT', // or 'PATCH' depending on your API design
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFact)
    })
    .then(response => response.json())
    .then(data => console.log('Fact updated:', data))
    .catch(error => console.error('Error updating fact:', error));
}
*/
    onSubmit() {
        if (this.factForm.valid && this.currentFact) {
            this.currentFact.question = this.factForm.value.question;
            this.currentFact.answer = this.factForm.value.answer;
            this.learningPackageService.modifyFact(this.packageId, this.currentFact);
            this.router.navigate(['/learning-facts-page', this.packageId]);
        }
    }
    goBack() {
      this.router.navigate(['/learning-facts-page', this.packageId]);
    }
}
