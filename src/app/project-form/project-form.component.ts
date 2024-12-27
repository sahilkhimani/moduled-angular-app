import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-project-form',
  standalone: false,
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit{
  projectStatus = ['stable', 'critical', 'finished'];

  projectForm : FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName' : new FormControl('', {validators : [Validators.required, CustomValidator.invalidProjectName], asyncValidators : [CustomValidator.asyncInvalidProjectName()]}),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'projectStatus' : new FormControl(this.projectStatus[1])
    })
  }

  submitForm(){
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }
}
