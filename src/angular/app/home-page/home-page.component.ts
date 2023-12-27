import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearningPackageService, LearningPackage } from '../learning-package.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

 

export class HomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private learningPackageService: LearningPackageService
  ) { }

  learningPackages!: LearningPackage[];

  ngOnInit(): void {
    this.setCurrentQuote();
    this.loadLearningPackages();
  }
  loadLearningPackages(): void {
    this.learningPackages = this.learningPackageService.getActiveLearningPackages();
  }
  openLearningSession(packageId: number): void {
    this.router.navigate(['lesson-list', packageId]);
  }
  
  quotes: string[] = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "Develop a passion for learning. If you do, you will never cease to grow. – Anthony J. D'Angelo"
  ];
  currentQuote!: string;
  setCurrentQuote(): void {
    const weekNumber = this.getWeekNumber(new Date());
    this.currentQuote = this.quotes[weekNumber % this.quotes.length];
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  modifyPackage(id: number, event: Event): void {
    event.stopPropagation();
    console.log('Modify package with ID:', id);
  }

  deletePackage(id: number, event: Event): void {
    event.stopPropagation();
    this.learningPackageService.deletePackage(id);
    this.loadLearningPackages();
  }

  achievePackage(id: number, event: Event): void {
    event.stopPropagation();
    console.log('Achieve package with ID:', id);
    this.learningPackageService.achievePackage(id);
    this.loadLearningPackages(); // Refresh the list of active packages
    this.router.navigate(['/achievements-page']); // Navigate to achievements page
  }
}
