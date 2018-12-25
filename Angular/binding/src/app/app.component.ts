import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  one:number;
  
  Display(eid:String){
    console.log("admin is saying " +eid);
    console.log("it is employee"+this.one);
    
  }
}
