import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;

  name:string="";
  email:string="";
  password:string="";
  constructor(private frmbuider:FormBuilder,private router:Router) { 
   this.signupform = frmbuider.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
   })
  }
  
  ngOnInit(): void { }

   signup(){
    if(this.signupform.valid){
      localStorage.setItem('user',JSON.stringify(this.signupform.value));
      this.router.navigate(['/login']);
    }
  }
}



