import { Component } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile_otp';
  mobilenumber : FormControl;

  constructor(){
    this.mobilenumber = new FormControl('', [Validators.required, Validators.minLength(10)]);
  }


  submit(){
    console.log(this.mobilenumber.value);
  }
}
