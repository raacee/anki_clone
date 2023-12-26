import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningPackageService } from '../learning-package.service';


@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})

export class LessonListPageComponent implements OnInit {
  package: any;
  currentQuestionIndex = 0;
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
    this.isLastQuestion = this.package && this.currentQuestionIndex === this.package.questions.length - 1;
  }
  toggleAnswer() {
    if (this.showAnswer) {
      if (this.isLastQuestion) {
        this.showFinish = true;
      } else {
        this.goToNextFact();
      }
    } else {
      this.showAnswer = true;
    }
  }
  goToNextFact() {
    if (this.currentQuestionIndex < this.package.questions.length - 1) {
      this.currentQuestionIndex++;
      this.showAnswer = false;
      this.isLastQuestion = this.currentQuestionIndex === this.package.questions.length - 1;
    } else {
      this.showFinish = true;
    }
  }
  finishPackage() {
    // Perform any necessary actions for finishing the package
    // For example, you can navigate back to the home page
    this.router.navigate(['/home']);
  }
}