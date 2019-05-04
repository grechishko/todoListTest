import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Todo[] = [new Todo()];

  isactive: Boolean = false;

  constructor() {}


  toggleCheck(item:Todo) {
    console.log("check toggle");
  }

  deleteItem(item:Todo) {
    console.log("item deleted");
  }

  onToggle() {
    this.isactive = !this.isactive;
    console.log(this.isactive);
  }

}


