import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private frmbuilder:FormBuilder){
    this.loginform=frmbuilder.group({
      email:new FormControl(),
      password:new FormControl(),
    })
    
  }
  ngOnInit(): void {
    
  }
  
 
}
