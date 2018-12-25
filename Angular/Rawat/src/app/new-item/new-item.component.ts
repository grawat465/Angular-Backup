import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Input()ename:String;
  constructor() {
    //this.ename= "This is it";
   }

  ngOnInit() {
  }

}
