import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-users',
  standalone: false,
  
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
  @Input() users : {name : string} = {name : 'sahil'};
}
