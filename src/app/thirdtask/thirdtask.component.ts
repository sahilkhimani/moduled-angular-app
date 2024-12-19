import { Component, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-thirdtask',
  standalone: false,
  
  templateUrl: './thirdtask.component.html',
  styleUrl: './thirdtask.component.css'
})
export class ThirdtaskComponent{
  fruitsArr = ['apple', 'banana', 'orange'];
  @Output() myEvent = new EventEmitter();
  
  sendData(){
    this.myEvent.emit(this.fruitsArr);
  }
  @Input() title = ''; 
  @Input() fruits : string[] = [];
  @Input() myObj : any = { };
  public fruit = ''.toLowerCase();
  showSecretPara = false;
  logArr:any[] = [];
  count = 1;
  toggleDisplay(){
    this.showSecretPara = !this.showSecretPara;
    this.logArr.push(this.count++);
  }

}
