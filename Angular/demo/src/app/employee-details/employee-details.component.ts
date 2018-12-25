import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <p>
      employee-details works!
      <ul "ngFor="let emp of employees">
      <li>{{emp.empid}} {{emp.empname}}  {{emp.empsal}}  {{emp.age}}</li>
      </ul>
    </p>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
public employee:[];

constructor(private service:EmployeeService){}

  ngOnInit() {
    this.employee=service.getem();
  }

}
