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

  constructor() {}


  toggleCheck(item:Todo) {
    item.done = !item.done;
    console.log("check toggle");
  }

  deleteItem(index:number) {
    this.todo.splice(index, 1);
    console.log("item deleted");
  }

  onToggle() {
    this.isactive = !this.isactive;
    console.log(this.isactive);
  }

}


