import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers : [UserService]  
})
export class AppComponent {
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

 
}
