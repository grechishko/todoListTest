import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Todo[] = [new Todo('Code a todo list', true), 
                  new Todo('Learn something else', false),
                  new Todo('Learn basic Angular', false)];

  isactive: boolean = false;
  itemToAdd: string = '';

  constructor() {}


  toggleCheck(item:Todo) {
    item.done = !item.done;
  }

  deleteItem(index:number) {
    this.todo.splice(index, 1);
  }

  onToggle() {
    this.isactive = !this.isactive;
  }

  addTodoElement() {
    if (!this.itemToAdd) return;
    let newItem = new Todo(this.itemToAdd, false);
    this.todo.push(newItem);
    this.itemToAdd = '';
  }

}


