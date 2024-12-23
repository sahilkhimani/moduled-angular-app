import { Component, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  standalone: false,
  
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<number>(); 
  lastNumber = 0;
  interval : any;
  startBtnDisable = false;
  stopBtnDisable = true

  OnGameStart() {
    this.startBtnDisable = true;
    this.stopBtnDisable = false;
    this.interval = setInterval(()=> {
      this.gameStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  OnGameStop() {
    clearInterval(this.interval);
    this.startBtnDisable = false;
    this.stopBtnDisable = true;
  }
}
