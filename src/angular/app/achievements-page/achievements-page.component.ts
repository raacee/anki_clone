import { Component, OnInit } from '@angular/core';
import { LearningPackageService, LearningPackage } from '../learning-package.service';

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.css']
})
export class AchievementsPageComponent implements OnInit {
  achievedPackages: LearningPackage[] = [];

  constructor(private learningPackageService: LearningPackageService) {}

  ngOnInit(): void {
    this.achievedPackages = this.learningPackageService.getAchievedLearningPackages();
  }
}
