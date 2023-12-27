import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { NumberStepsComponent } from './number-steps/number-steps.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AchievementsPageComponent } from './achievements-page/achievements-page.component';
import { PackageCreationPageComponent } from './package-creation-page/package-creation-page.component';
import { NonStudyPackagesComponent } from './non-study-packages/non-study-packages.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component,
    NumberDisplayComponent,
    NumberStepsComponent,
    NumberEditComponent,
    HomePageComponent,
    AchievementsPageComponent,
    PackageCreationPageComponent,
    NonStudyPackagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // <= for [(ngModel)] supports
    ReactiveFormsModule // <= for supports FormGroup/FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
