import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Go to work',
        complete: false
      },
      {
        id: 2,
        title: 'Go shopping',
        complete: true,
        note: 'egg, milk'
      },
      {
        id: 3,
        title: 'Cooking',
        complete: false,
      }
    ];
  }

  getAllTodos() {
    console.log('getAllTodos: ', this.todos.length);
    return this.todos;
  }

  save(todo: Todo) {
    console.log('save: ', todo);

  }
}
