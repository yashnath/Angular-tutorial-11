import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'For loop';
  list1:number[] = [1,2,3,4];
  customer = [{name : 'martin' , age : 18},  // here name and age are object and cutomer is varibale.

  {name : 'Hardwell' , age : 24},
];
}
