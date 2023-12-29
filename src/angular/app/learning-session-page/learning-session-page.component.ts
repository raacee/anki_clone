import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningPackageService } from '../learning-package.service';

@Component({
  selector: 'app-learning-session-page',
  templateUrl: './learning-session-page.component.html',
  styleUrls: ['./learning-session-page.component.css']
})

export class LearningSessionPageComponent {
  package: any;
  currentFactIndex = 0;
  showAnswer = false;
  isLastQuestion = false;
  showFinish = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private learningPackageService: LearningPackageService
  ) { }

  ngOnInit() {
    const packageId = +this.route.snapshot.paramMap.get('id')!;
    this.package = this.learningPackageService.getPackageById(packageId);
    this.isLastQuestion = this.package && this.currentFactIndex === this.package.questions.length - 1;
  }
  toggleAnswer() {
    this.showAnswer = true;
  }
  setDifficultyAndGoToNextFact(difficulty: number): void {
    if (this.currentFactIndex < this.package.questions.length - 1) {
      this.currentFactIndex++;
      this.learningPackageService.updateFact(this.package.id, this.currentFactIndex, difficulty);
      this.showAnswer = false;
      this.isLastQuestion = this.currentFactIndex === this.package.questions.length - 1;
    } else {
      this.learningPackageService.updateFact(this.package.id, this.currentFactIndex+1, difficulty);
      this.showFinish = true;
    }
  }
  finishPackage() {
    this.router.navigate(['/home']);
  }
}