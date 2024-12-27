import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-my-user',
  standalone: false,
  
  templateUrl: './my-user.component.html',
  styleUrl: './my-user.component.css'
})
export class MyUserComponent implements OnInit{
  id? : number;
  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params : Params) => {
          this.id = +params['id']
        }
      )
  }
}
