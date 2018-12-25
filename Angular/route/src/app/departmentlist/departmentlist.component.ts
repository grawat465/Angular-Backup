import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from  '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
id:number;
  constructor( private route:ActivatedRoute, private route1:Router) { }

  ngOnInit() {
    let id1=parseInt(this.route.snapshot.paramMap.get('id'));
    this.id=id1;
    
  }
  onPrevious(){
    let pid=this.id-1;
    this.route1.navigate(['/department',pid]);
    this.id=pid;
  }
  onNext(){
    let nid=this.id+1;
    this.route1.navigate(['/department',nid]);
    this.id=nid;
  }
onBack(){
  let selId=this.id ?  this.id : null;
  this.route1.navigate(['/department', {id:selId}]);
}
}
