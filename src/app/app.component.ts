import { Component, OnDestroy, OnInit } from '@angular/core';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-Bootstrap';
  constructor() {
    console.log('AppComponent.constructor()');
  }
  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }
  ngOnDestroy() {
    console.log('AppComponent.ngOnDestroy()')
  }
}
