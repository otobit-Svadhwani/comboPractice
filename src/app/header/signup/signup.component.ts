import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;
  constructor(private frmbuider:FormBuilder) { 
   this.signupform = frmbuider.group({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
   })
  }
  ngOnInit(): void { }

}
