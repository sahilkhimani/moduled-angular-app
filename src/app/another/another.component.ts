import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  standalone: false,
  
  templateUrl: './another.component.html',
  styleUrl: './another.component.css'
})
export class AnotherComponent {
  public name = "";
  public styleClass = "";
  public condition = false;
  
  clickFunction(name : string){
    this.name = name;
    if(this.condition){
      this.styleClass = "colorName";
    }
    else{
      this.styleClass = "styleFont";
    }
    this.condition = !this.condition;
  }
}
