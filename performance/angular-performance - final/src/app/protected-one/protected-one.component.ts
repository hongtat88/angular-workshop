import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/Operators';

@Component({
  selector: 'app-protected-one',
  templateUrl: './protected-one.component.html',
  styleUrls: ['./protected-one.component.scss']
})
export class ProtectedOneComponent implements OnInit {

  subscriptions = new Subject();

  constructor() { }

  ngOnInit(): void {
    
    interval(1000).pipe(
      tap(console.log)
    ).subscribe();

  }

}
