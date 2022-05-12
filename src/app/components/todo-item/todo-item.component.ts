import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo | null;

  constructor() {
    this.todo = null;
    console.log('TodoItemComponent created');
  }

  ngOnInit(): void {
    console.log('TodoItemComponent onInit');
  }

}
