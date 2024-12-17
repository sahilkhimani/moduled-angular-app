import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  standalone: false,
  
  template: `
    <h3>
      This is success alert component
    </h3>
  `,
  styles: [`
    h3{
      color : green;
    }
    `]
})
export class SuccessAlertComponent {

}
