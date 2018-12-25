import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ename:String[];
  constructor() { 
    this.ename = ['Rashi Yadav' , 'Vibhanshu' , 'Bhanu' , 'Govind' , 'Nalin']
  }

  ngOnInit() {
  }

}
