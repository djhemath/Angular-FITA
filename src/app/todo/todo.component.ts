import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

  // template: `<h1>Todo component</h1>
  // <h2>hey</h2>
  // `,
  // styles: ['h2 {color: red}']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Backend call')
  }

}
