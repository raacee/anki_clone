import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from "./lesson-detail-page/lesson-detail-page.component";
import { TestPage1Component } from "./test-page1/test-page1.component";
import { HomePageComponent } from './home-page/home-page.component';
import { AllLearningPackagesComponent } from './all-learning-packages/all-learning-packages.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [ {path:'lesson-edit-form', component: LessonEditFormComponent},
  {path:'lesson-list', component: LessonListPageComponent},
  { path:'lesson/:id', component: LessonDetailPageComponent},
  { path:'test-page1', component: TestPage1Component },
  { path: 'all-learning-packages', component: AllLearningPackagesComponent },
  { path: 'home', component: HomePageComponent },
  {path : 'login', component:LoginComponent},
  {path : 'profile', component:ProfileComponent},
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
