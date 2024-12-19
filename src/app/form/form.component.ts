import { Component } from '@angular/core';
@Component({
  selector: 'app-form',
  standalone: false,  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // name = '';
  // AddData(username : any){
  //   this.name = username;
  // }

  username = '';
  resetInput(){
    if(this.username != ''){
      this.username = '';
    }
  }
}
