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
  
  sortByStatus: boolean = false;

  constructor() { }

  getTodo(): Todo[] {
    return this.todo;
  }

  addTodo(label: string): void {
    this.todo.push(new Todo(this.genId(), label, false));
    this.sort();
  }

  genId(): number {
    return this.todo.length > 0 ? Math.max(...this.todo.map(todo => todo.id)) + 1 : 1;
  }

  sort(): void {
    if (!this.sortByStatus) this.todo.sort((a, b) => (a.id - b.id));    
      else this.todo.sort((a, b) => (Number(a.done) - Number(b.done)));
  }

}
