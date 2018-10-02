import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;

  constructor() { }

  public ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required)
    });
  }

  public onSubmit() {
    console.log(this.myForm.value);
    sessionStorage.setItem('username', this.myForm.value.username);
  }

}
