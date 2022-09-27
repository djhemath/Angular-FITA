import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent implements OnInit {
  public count = 10;

  public val = "";

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
