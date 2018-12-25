import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ad:Admin=new Admin();
  res:boolean;
  constructor(private FB: FormBuilder,private router: Router, private service : AdminService) { }
  loginForm: FormGroup;

 

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.loginForm = this.FB.group({
  email: ['', [Validators.required, 
  Validators.pattern("[a-z0-9]{4,12}")]],
  password : ['', Validators.required]
    });

  }

  login () {
    console.log(this.loginForm.value);
  }


  onSubmit(obj){
    this.ad.email=obj.email;
    this.ad.password=obj.password;
  
     
  
    this.service.requestLogin(this.ad.email,this.ad.password).subscribe( data =>{
      this.res=data;
      if(this.res==true)
      {
        alert("User login SuccessFully."); 
      }
      else alert("login failed");
      
    });
}

}
