import { Injectable } from '@angular/core';
import { Todo } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[] = [
    new Todo(1, 'Code a todo list', true),
    new Todo(2, 'Learn something else', false),
    new Todo(3, 'Learn basic Angular', false)];

  constructor() { }

  getTodo(): Todo[] {
    return this.todo;
  }

  addTodo(label: string): void {
    this.todo.push(new Todo(this.genId(), label, false));
  }

  genId(): number {
    return this.todo.length > 0 ? Math.max(...this.todo.map(todo => todo.id)) + 1 : 1;
  }
}
