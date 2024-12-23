import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  standalone: false,
  
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input() oddNumber = 0;
}
