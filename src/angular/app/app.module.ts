import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AchievementsPageComponent } from './achievements-page/achievements-page.component';
import { PackageCreationPageComponent } from './package-creation-page/package-creation-page.component';
import { NonStudyPackagesComponent } from './non-study-packages/non-study-packages.component';
import { LearningFactsPageComponent } from './learning-facts-page/learning-facts-page.component';
import { ModifyLearningFactPageComponent } from './modify-learning-fact-page/modify-learning-fact-page.component';
import { AddLearningFactPageComponent } from './add-learning-fact-page/add-learning-fact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    HomePageComponent,
    AchievementsPageComponent,
    PackageCreationPageComponent,
    NonStudyPackagesComponent,
    LearningFactsPageComponent,
    ModifyLearningFactPageComponent,
    AddLearningFactPageComponent
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
