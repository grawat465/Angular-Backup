import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-department',
  template: `
   <h3>Department List </h3>
   <ul class="items" *ngFor="let dept of departments">
   <li (click)="onSelect(dept)"  [class.selected]="isSelected(dept)" ><span class="badge">{{dept.id}} </span> {{dept.name}}</li>
   </ul>

  `,
  styles: []
})
export class DepartmentComponent implements OnInit {
  public selId;
  departments=[
   { "id":1 ,  "name":"Angular"},
   { "id":2 ,  "name":"Node"},
   { "id":3 ,  "name":"javaScript"},
   { "id":4 ,  "name":"C++"},
   { "id":5 ,  "name":"PHP"}
  ]

  constructor( private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id2=parseInt(params.get('id'));
      this.selId=id2;
    });
  }
  onSelect(dept){
    this.router.navigate(['/department',dept.id])
  }
  isSelected(dId){
    return dId.id===this.selId;
  }

}
