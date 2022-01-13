import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  email:string="";
  password:string="";
  constructor(private frmbuilder:FormBuilder){
    this.loginform=frmbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  
  login(){
    let userprofile=JSON.parse(localStorage.getItem('user') || '[]')
    // console.log(userprofile);
    
    if(this.loginform.value.email==userprofile.email && this.loginform.value.password==userprofile.password){
      alert("Login Successful...");

    }
  }
 
}
