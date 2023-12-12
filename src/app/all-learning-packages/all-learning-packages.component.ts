import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface LearningPackage {
  LearnPack_id: number;
  LearnPack_title: string;
  LearnPack_desc: string;
  LearnPack_category: string;
  LearnPack_target: number;
  LearnPack_difficultyLevel: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './all-learning-packages.component.html',
  styleUrls: ['./all-learning-packages.component.css']
})
export class AllLearningPackagesComponent {
  learningPackages: LearningPackage[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLearningPackages();
  }

  fetchLearningPackages(): void {
    this.http.get<LearningPackage[]>('/api/learningPackages')
      .pipe(
        catchError((error) => {
          console.error('Error fetching learning packages:', error);
          return throwError(() => new Error(error));
        })
      )
      .subscribe(
        (data) => {
          this.learningPackages = data;
        }
      );
  }
}
