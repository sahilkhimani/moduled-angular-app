import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moduleBasedApp';
  fruits= [];
  // fruitsArr = ['apple', 'banana', 'orange', 'grapes'];
  // myObj = {
  //   'name' : 'sahil',
  //   'role' : 'dev'
  // };
}
