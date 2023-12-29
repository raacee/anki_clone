import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LearningPackageService } from '../learning-package.service';

@Component({
  selector: 'menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent {
 /* private _searchTerm = '';

  get searchTerm(): string {
      return this._searchTerm;
  }
  
  set searchTerm(value: string) {
      this._searchTerm = value;
      console.log('Search Term:', this._searchTerm);
  }
  
  constructor(private learningPackageService: LearningPackageService, private router: Router) { }

  performSearch() {
    console.log('Search Term:', this.searchTerm);
    this.router.navigate(['/'], { queryParams: { q: this.searchTerm } });
    this.searchTerm = '';
  }*/

  /*
            <form class="d-flex" role="search" (submit)="performSearch()">
            <input id="searchForm" class="form-control me-2" type="search" 
            placeholder="Search" aria-label="Search" [(ngModel)]="searchTerm">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
  */
}