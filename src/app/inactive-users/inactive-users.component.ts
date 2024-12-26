import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  standalone: false,

  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit{
  @Input() users: string[] = [];
  
  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  setActive(id: number) {
    this.userService.setActive(id);
  }
}
