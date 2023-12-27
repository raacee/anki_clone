import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from "./lesson-detail-page/lesson-detail-page.component";
import { TestPage1Component } from "./test-page1/test-page1.component";
import { HomePageComponent } from './home-page/home-page.component';
import { PackageCreationPageComponent } from './package-creation-page/package-creation-page.component';
import { AchievementsPageComponent } from './achievements-page/achievements-page.component';
import { NonStudyPackagesComponent } from './non-study-packages/non-study-packages.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

const routes: Routes = [ {path:'lesson-edit-form', component: LessonEditFormComponent},
  {path:'lesson-list/:id', component: LessonListPageComponent},
  { path:'lesson/:id', component: LessonDetailPageComponent},
  { path:'test-page1', component: TestPage1Component },
  { path: 'non-study-packages', component: NonStudyPackagesComponent },
  { path: 'achievements-page', component: AchievementsPageComponent },
  { path: 'package-creation-page', component: PackageCreationPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,enableTracing: true})],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
})
export class AppRoutingModule { }
