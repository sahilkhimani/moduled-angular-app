import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  activeUsers = ['sahil', 'asif'];
  inactiveUsers = ['ahmed', 'khan'];
  
  setInactive(id : number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setActive(id : number){
    console.log("activate the user");
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
