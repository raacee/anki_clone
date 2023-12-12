import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserSettingsService} from "../user-settings.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

class LessonPackage {
}

@Component({
  selector: 'lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
  /*constructor(private router: Router, private userSettingsService:
    UserSettingsService) {
  }*/
  lessonForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }

  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }



  title: string = '';
  description: string = '';
  category: string = '';
  level: number = 1;
  prerequisite: string[] = [];
  tags: string[] = [];
  copyright: string = '';


 /* onClickSubmit() {
    const formValues: LessonPackage = {
      title: this.title,
      description: this.description,
      category: this.category,
      level: this.level,
      prerequisite: this.prerequisite,
      tags: this.tags,
      copyright: this.copyright
    };
    console.log('form values to save to server', formValues);
  }
*/
  /*OnClickSubmit() {
    this.userSettingsService.lastLessonId = 1234;
    // could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list']).then(res => {
    })
  }
  */
}


