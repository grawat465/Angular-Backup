import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deployee',
  templateUrl: './deployee.component.html',
  styleUrls: ['./deployee.component.css']
})
export class DeployeeComponent implements OnInit {
 @Input() empnames:String;

  constructor() {

   }

  ngOnInit() {
  }
 abbr(empname)
  {
    var splitted= empname.split(" ");
    var length= splitted.length;
    var h=0;
    var ans="";
  for(h=0;h<length-1;h++)
  {
      ans+=(splitted[h].charAt(0));
  }
      ans+=(splitted[h]);
      return ans;
  }
     
  
}

