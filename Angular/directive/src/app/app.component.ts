import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';
cities:string[];
            
  people:string[];

  peopleByCity:string[];



  

 // article: Nalin[];

   

  constructor() {

    //this.cities = ['Miami', 'Sao Paulo', 'New York'];



    this.people = [

      { name: 'Anderson', age: 35, city: 'Sao Paulo' },

    { name: 'John', age: 12, city: 'Miami' },

      { name: 'Peter', age: 22, city: 'New York' }

      ];

    

      this.peopleByCity = [

        {

        city: 'Miami',

        people: [

        { name: 'John', age: 12 },

        { name: 'Angel', age: 22 }

        ]

        },

        {

        city: 'Sao Paulo',

        people: [

        { name: 'Anderson', age: 35 },

        { name: 'Felipe', age: 36 }

        ]
      }

        

        

       



    

  