import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LearningPackageService, LearningPackage } from '../learning-package.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private learningPackageService: LearningPackageService
  ) { }

  learningPackages!: LearningPackage[];

  async ngOnInit(): Promise<void> {
    this.setCurrentQuote();
    this.learningPackages = await this.getLearningPackages()
    await this.loadLearningPackages();
  }
  async loadLearningPackages(): Promise<void> {
    this.learningPackages = this.getActiveLearningPackages();
  }
  openLearningSession(packageId: string): void {
    this.router.navigate(['learning-session-page', packageId]);
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

  //dirige vers page d'édition du lf
  modifyPackage(id: string, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/learning-facts-page', id]);
  }

  async getLearningPackages(): Promise<LearningPackage[]> {
    const response =  await fetch('/api/learningpackages')
    const text = await response.text()
    return JSON.parse(text)
  }

  getActiveLearningPackages(): LearningPackage[] {
    return this.learningPackages.filter(p => !p.isAchieved && p.isStudyProgram);
  }

  deletePackage(id: string, event: Event): void {
    event.stopPropagation();
    this.learningPackages = this.learningPackages.filter(p => p.id !== id);
    // send delete of package
    fetch('')
  }

  achievePackage(id: string, event: Event): void {
    event.stopPropagation();
    console.log('Achieve package with ID:', id);

    const pkg = this.learningPackages.find(p => p.id === id);
    if (pkg) {
      pkg.isAchieved = true;
      console.log(`Package ${id} achieved`, pkg);
    }

    this.loadLearningPackages(); // Refresh
    this.router.navigate(['/achievements-page']);
  }
}
