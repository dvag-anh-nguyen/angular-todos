import { Component } from '@angular/core';
import {TodoService} from "./services/todo.service";
import {Todo} from "./model/todo";
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'todos-app';

  appAuthor = new User('Anh Quan', 'Nguyen');
  newTodo: Todo = new Todo();

  // @devnote: add 'private' to quickly declare a private class property. This property is automatically injected to constructor
  constructor(private todoService: TodoService) {
    console.log('AppComponent created: todoService', todoService);
  }

  // @devnote using 'get' to declare a getter => This will be called by 'appComponentInstance.todoList'
  get todoList() {
    console.log('AppComponent.todoList: getter is called')
    return this.todoService.getAllTodos();
  }
}
