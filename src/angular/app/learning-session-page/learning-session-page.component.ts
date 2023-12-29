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

/*
  async getPackageById(id: number): Promise<LearningPackage | undefined> {
    try {
      const response = await fetch(`/api/learningpackages/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  */

  /*async*/ngOnInit() {
    const packageId = this.route.snapshot.paramMap.get('id')!;
    this.package = this.learningPackageService.getPackageById(packageId);
  //this.package = await this.getPackageById(packageId);
    this.isLastQuestion = this.package && this.currentFactIndex === this.package.questions.length - 1;
  }
  toggleAnswer() {
    this.showAnswer = true;
  }

/*
async updateFact(packageId: number, factId: number, confidenceLevel: number): Promise<void> {
  // Update local data first
  const pkg = this.learningPackages.find(p => p.id === packageId);
  const fact = pkg?.questions.find(f => f.id === factId);
  if (fact) {
    fact.reviewCount += 1;
    fact.lastReviewedDate = new Date(); // Today
    fact.confidenceLevel = confidenceLevel;
    switch (confidenceLevel) {
      case 1:
        fact.nextDate = new Date(fact.lastReviewedDate.getTime() + 7 * 24 * 60 * 60 * 1000); // +1 week
        break;
      case 2:
        fact.nextDate = new Date(fact.lastReviewedDate.getTime() + 4 * 24 * 60 * 60 * 1000); // +4 days
        break;
      case 3:
        fact.nextDate = new Date(fact.lastReviewedDate.getTime() + 1 * 24 * 60 * 60 * 1000); // +1 day
        break;
      case 4:
        fact.nextDate = new Date(fact.lastReviewedDate.getTime()); // today
        break;
    }
  }

  // Now, send an update request to the backend
  try {
    const updatedFactData = { ...fact }; // Create a copy of the fact to send
    const response = await fetch(`/api/learningpackages/${packageId}/facts/${factId}`, {
      method: 'PUT', // or 'POST', depending on your backend setup
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFactData)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Optionally, process the response if needed
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

  */


  /*async*/setDifficultyAndGoToNextFact(difficulty: number): void {
    if (this.currentFactIndex < this.package.questions.length - 1) {
      this.currentFactIndex++;
      this.learningPackageService.updateFact(this.package.id, this.currentFactIndex, difficulty);
    //await this.updateFact(this.package.id, this.currentFactIndex, difficulty);
      this.showAnswer = false;
      this.isLastQuestion = this.currentFactIndex === this.package.questions.length - 1;
    } else {
      this.learningPackageService.updateFact(this.package.id, this.currentFactIndex+1, difficulty);
    //await this.updateFact(this.package.id, this.currentFactIndex, difficulty);
      this.showFinish = true;
    }
  }
  finishPackage() {
    this.router.navigate(['/home']);
  }
}