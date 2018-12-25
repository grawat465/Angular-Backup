import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';

const routes: Routes = [
 { path:'department', component:DepartmentComponent},
 {  path:'employee', component:EmployeeComponent},
 {
  path:'department/:id',component:DepartmentlistComponent
},
 {
  path:'', component:HomeComponent
},
 {
   path:'**', component:DefaultComponent
 },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export 
const comp=[EmployeeComponent, DepartmentComponent, DefaultComponent];
