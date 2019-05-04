import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[] = [new Todo('Code a todo list', true),
    new Todo('Learn something else', false),
    new Todo('Learn basic Angular', false)];

  constructor() { }

  getTodo (): Todo[] {
    return this.todo;
  }

  addTodo (todo: Todo): void {
    this.todo.push(todo);
  }
}
