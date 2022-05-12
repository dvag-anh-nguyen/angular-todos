import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor() {
    this.todos = [];
    console.log('TodoListComponent created');
  }

  ngOnInit(): void {
    console.log('TodoListComponent onInit');
  }

}
