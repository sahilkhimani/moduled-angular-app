import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  standalone: false,
  
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent {
 @Input() users : {name : string} = {name : 'sahil'};
}
