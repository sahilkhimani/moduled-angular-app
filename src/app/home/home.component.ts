import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  private firstSubscription? : Subscription;

  ngOnInit(): void {
    const customObservable = new Observable<number>(observer=> {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count > 3){
          observer.error(new Error("Count is greater than 3"));
        }
        count++;
      }, 1000)
    })
   this.firstSubscription = customObservable.subscribe(data => {
      console.log(data);
    }, error => {
      alert(error);
  });
  }

  ngOnDestroy(): void {
    this.firstSubscription?.unsubscribe();
  }

}
