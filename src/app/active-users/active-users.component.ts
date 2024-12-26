import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  standalone: false,
  
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
  @Input() users: string[] = [];
   
   constructor(private userService : UserService){}
 
   ngOnInit(): void {
     this.users = this.userService.activeUsers;
   }
 
   setInactive(id: number) {
     this.userService.setInactive(id);
   }
}
