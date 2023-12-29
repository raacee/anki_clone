import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningPackageService, LearningPackage, LearningFact  } from '../learning-package.service';

@Component({
  selector: 'app-learning-facts-page',
  templateUrl: './learning-facts-page.component.html',
  styleUrls: ['./learning-facts-page.component.css']
})
export class LearningFactsPageComponent implements OnInit {
  package?: LearningPackage;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private learningPackageService: LearningPackageService
  ) {}

  ngOnInit(): void {
    const packageId = +this.route.snapshot.paramMap.get('id')!;
    this.package = this.learningPackageService.getPackageById(packageId);
  }
  modifyFact(pkg :LearningPackage, fact: LearningFact, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/modify-learning-fact-page', pkg.id, fact.id]);
  }
  addFact(id:number): void {
    this.router.navigate(['/add-learning-fact-page', id]);
  }
}
