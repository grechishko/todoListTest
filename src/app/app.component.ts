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

  sortByStatus: boolean = false;
  itemToAdd: string = '';

  todoUnsorted: Todo[] = [];


  constructor() {}


  toggleCheck(item:Todo) {
    item.done = !item.done;
  }

  deleteItem(index:number) {
    this.todo.splice(index, 1);
  }

  onToggle() {
    this.sortByStatus = !this.sortByStatus;

    if (!this.sortByStatus) {
      this.todo = this.todoUnsorted;
      return;
    }
    
    let sortedArray = []
    let doneArray = this.todo.filter(function(item) { return item.done; });
    let notDoneArray = this.todo.filter(function(item) { return !item.done; });
    sortedArray = [...notDoneArray, ...doneArray];
    
    this.todoUnsorted = this.todo;
    this.todo = sortedArray;
  }

  addTodoElement() {
    if (!this.itemToAdd) return;
    let newItem = new Todo(this.itemToAdd, false);
    this.todo.push(newItem);
    this.todoUnsorted.push(newItem);
    this.itemToAdd = '';
  }

}


