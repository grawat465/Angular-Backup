import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    empname:String[];
  constructor() {

    this.empname =['Govind Singh', 'Bhanu Khandelwal', 'Nalin Aggarwal', 'Rashi Yadav','Vibhanshu Chhanghani'];

  }

  ngOnInit() {
  }

}
