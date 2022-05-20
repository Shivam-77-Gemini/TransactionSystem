import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  ;
  @ViewChild('signin') form: any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.form.valid){
      this.form.reset();
      return true;

    }
    else{
      alert("You have entered something wrong \n please Enter correct details!");
      return false;
    }
  }

}
