import { Component, OnInit } from '@angular/core';

import {FormBuilder,Validators, ReactiveFormsModule,FormGroup}  from  '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { LoginsignupService } from '../loginsignup.service';
import {Router} from '@angular/router';
import { Customer } from '../customer';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  

  
model:Customer=new Customer("","","","","",0,"","");
  

  constructor(private fb : FormBuilder,private login:LoginsignupService,private route:Router){}
  registrationForm=this.fb.group({
    userName:["",[Validators.required,Validators.pattern("[A-Z][A-Za-z 0-9]{3,10}"), Validators.minLength(4), Validators.maxLength(10) ]],
    password:["",[Validators.required, Validators.pattern("[A-Z][A-Za-z 0-9]{3,10}[!@#$%^&*]")]],
    Cpassword:["", [Validators.required, Validators.pattern("[A-Z][A-Za-z 0-9]{3,10}[!@#$%^&*]")]],
    State:["Haryana"],
    gender:["Male"],
    address: this.fb.group({
      city:["", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      pincode:["",[Validators.required, Validators.pattern("[0-9]{6}")]],
      street:["", [Validators.required, Validators.minLength(9)]],
      
    })

  })


//loaddata(){
//this.registrationForm.setValue({

//userName:"Jim Moriarity",
//password:"Holmes",
//Cpassword:"Heisenberg",
//address: {
  //city:"la",
  //pincode:"12345",
  //street:"2nd Baker Street"
//}
//});



printdata(value){

alert(value.userName  +"\n" + value.password +"\n" + value.Cpassword  +"\n"+value.address.city+"\n"+value.address.pincode+"\n"+value.address.street+
"\n"+value.State+   "\n"+value.gender);

}
   


logincomp(){

  this.route.navigate(["/login"]);
}

signUpUser(values){
  alert("testing "+values);
   this.model.Username=values.userName;
   this.model.Password=values.Password;
   this.model.CPassword=values.Cpassword;
   this.model.Gender=values.gender;
   this.model.City=values.city;
   this.model.Postal=values.pincode;
   this.model.Street=values.street; 
   this.model.State=values.State;

  this.login.requestSignUp(this.model).subscribe(data=>{
    alert("Registered Successfully" +data);
  });



}
}









 


