import { Component } from "@angular/core";
import {Employee} from './employee';
import {Observable} from 'rxjs';

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",

  styleUrls: ["./app.component.css"],
  styles: ["p { color:red; }"]
})
export class AppComponent {
  title: string = "Built-in pipe Demonstration";
  todayDate: Date = new Date();
  oldDate: Date = new Date("March 15, 2017 10:30:00");
  num: number[] = [1, 2, 3, 4, 5, 6];
  employees: Employee[] = [
    {
      empId: 1,
      name: "Ram",
      location: "Bangalore"
    },
    {
      empId: 2,
      name: "Raj",
      location: "Chennai"
    },
    {
      empId: 3,
      name: "Vinay",
      location: "Pune"
    }
  ];

  time$: Observable<Date> = new Observable(observer => {
    setInterval(() => observer.next(new Date()), 4000);
  });
}
