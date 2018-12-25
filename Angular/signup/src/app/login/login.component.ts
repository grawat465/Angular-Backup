import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators}  from  '@angular/forms';
import { LoginsignupService } from '../loginsignup.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  model:Customer=new Customer("","","","","",0,"","");

constructor(private fb:FormBuilder,private login:LoginsignupService,private route:Router) { }
  registrationForm=this.fb.group({
    userName:["",[Validators.required, Validators.pattern("[A-Z][A-Za-z 0-9]{3,10},Validators.minLength(4), Validators.maxLength(10)")]],
    password:["",[Validators.required, Validators.pattern("[A-Z][A-Za-z 0-9]{3,10}[!@#$%^&*]")]],
    
    })
    
    newmodel:Customer=new Customer("","","","","",0,"","");


    loginUser(values){

      this.model.Username=values.email;
      
      this.model.Password=values.password;
      
      
      
      this.login.requestLogin(values.email).subscribe(data=>{
      
      this.newmodel = data;
      
      
      
      if(this.newmodel==values.Username && this.newmodel==values.Password)
      
      {
      
      alert("logged in");
      
      }
      
      
      
      
      
      });
      
      
      
      }
      

  }

