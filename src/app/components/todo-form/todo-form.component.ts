import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../model/todo";
import ValidateTitle from "./validators/ValidateTitle";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.less']
})
export class TodoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private todoService: TodoService) {
    this.form = new FormGroup(
      {
        title: new FormControl('', [ValidateTitle]),
        complete: new FormControl()
      }
    )
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log(this.form.controls);
    const newTodo: Todo = {
      complete: !!this.form.value['complete'],
      id: 0,
      title: this.form.value['title']
    }
    this.todoService.save(newTodo)
  }
}
