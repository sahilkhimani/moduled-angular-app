import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers : [UserService]  
})
export class AppComponent {
  constructor(private router : Router){}
  title = 'moduleBasedApp';
  fruits = [];
  // fruitsArr = ['apple', 'banana', 'orange', 'grapes'];
  // myObj = {
  //   'name' : 'sahil',
  //   'role' : 'dev'
  // };

  oddNumberArr: number[] = [];
  evenNumberArr: number[] = [];

  onGameStarted(lastNumber: number) {
    if (lastNumber % 2 === 0) {
      this.evenNumberArr.push(lastNumber);
    }
    else {
      this.oddNumberArr.push(lastNumber);
    }
  }

  GamePage(){
    this.router.navigate(["/game"]);
  }
  FormPage(){
    this.router.navigate(["/form"]);
  }
 
}
