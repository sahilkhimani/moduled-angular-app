import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: false,
  
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
@Input() evenNumber = 0;  
}
