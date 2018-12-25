import { Component } from '@angular/core';

import { Hero }    from '../hero';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';
//import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  
  powers = [''];
  temp;
 
     
  model = new Hero(18, "72054", this.powers[0]);
  //hero:Hero;
   
  
  submitted = false;
  constructor(private http:HttpClient, private Service:CustomerService){

  }
  onSubmit() { this.submitted = true; }

  
  get diagnostic() { return JSON.stringify(this.model); }
  
  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    let myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           );
    console.log('My hero is called ' + myHero.custName); 
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value;
  }

  /////////////////////////////
  public getdata(){
    this.temp=this.Service.getData().subscribe(data =>{this.temp=data})
     console.log(this.temp);
  
    }
    mess;
    public postdata(cust){
          this.Service.createUser(cust).subscribe(data =>{this.mess=data
          
          alert("User Added"+data);});
    }
}
